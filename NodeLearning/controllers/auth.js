const { createUser, findUser } = require("../models/user")

exports.createUser = (email, password) => {
    try {
        const userId = Date.now();
        createUser(email, password, userId);
    } catch (err) {
        throw err;
    }
}

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        if (!!user && user.password === password) {
            return "Login Successfully";
        } 
        return "Incorrect Email or Password";
    } catch (err) {
        throw err;
    }
}

