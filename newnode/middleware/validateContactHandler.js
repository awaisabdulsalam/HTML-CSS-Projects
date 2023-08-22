const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../routes/key");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User is Not Authorized");
            }
            req.user = decoded.user;
            next();
        });
        if(!token) {
            res.status(401);
            throw new Error("User is not authorized or token is")
        }
    }
});

module.exports = validateToken;