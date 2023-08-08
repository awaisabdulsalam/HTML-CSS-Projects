const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const secretKey = "secretkey";

app.get("/", (req, res) => {
    res.json({
        message: "A sample API"
    })
});

app.post("/login", (req, res) => {
    //*  user object will be stored in authData below
    const user = {
        id: 1,
        name: "Awais",
        email: "test@mail.com"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '1hr' }, (err, token)=> {
        res.json({
            token
        })
    })
});

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
            //?   agr token or key match ho gyi tuo data otherwise err 
        if (err) {
            res.send({ result: "Invalid token"});
        } else {
            res.json({
                message: "Profile accessed",
                authData: authData //? authData will equal to user from login ^^^^ above
            })
        }
    })
});


//?  Because it will work as middleware
function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        console.log(bearer);
        const token = bearer[1];
        req.token = token;
        next();
    } else {
      res.send({
        result: "Token is not valid",
      });
    }
}

app.listen(3000, () => {
    console.log("App is running");
});