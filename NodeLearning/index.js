const express = require("express");
//?   Humari saari App iss " app " variable ma hy
const app = express();
const form = require("./routes/form")

//*   Main work of Middleware is to act as MIDDLE WARE
//?     Middleware Function
//?     Middleware is like different Departments in Company
//! 1. Department
app.use((req, res, next) => {
    // console.log(req.url);
    req.data = "Awais";
    next();
    //?     "next()" agly department(function) ko call kr de ga 
})

//! 2. Department
// app.use((req, res, next) => {
    // res.send(req.url);
    // res.send(req.data);
// })

app.use("/form", form)

app.listen(3000);