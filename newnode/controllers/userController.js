const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { SECRET_KEY } = require("../routes/key");

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(404);
        throw new Error("All fields are required");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400)
        throw new Error("User already Exist")
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashPassword
    });
    if(user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({ mess: "Register the User" });
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("User Not Found");
    }
    const user = await User.findOne({ email });
    //*                      compare >> this to  this
    if(user && (await bcrypt.compare(password, user.password))) {
        console.log("Before Token");
        // console.log(process.env)
        const accessToken = jwt.sign(
          {
            user: {
              username: user.username,
              email: user.email,
              id: user.id,
            },
          },
          SECRET_KEY,
          { expiresIn: "10m" }
        );
          console.log(accessToken);
          console.log("After Token")
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or Password is Valid")
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };