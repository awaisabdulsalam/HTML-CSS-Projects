const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { createUser, findUser } = require("../models/user");
const { SECRET_KEY } = require("../data/key");

exports.createUser = async (email, password) => {
    try {
        const userId = Date.now();
        const encPassword = await bcrypt.hash(password, 12);
        return await createUser(email, encPassword, userId);
    } catch (err) {
        throw err;
    }
}

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        const result = await bcrypt.compare(password, !!user && user.password);
        //! Before
        // if (!!user && user.password === password) {
        //! After
        if (result) { 
            var token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1hr' });
            return { token };
        } 
        return "Incorrect Email or Password";
    } catch (err) {
        throw err;
    }
}

