const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const products = require("./routes/products");
const persons = require("./routes/persons");
const students = require("./routes/students");
const relation = require("./routes/relation");
const mongoose = require("./models/connection");

//?   Humari saari App iss " app " variable ma hy
const app = express();


//*   Main work of Middleware is to act as MIDDLE WARE
//?   Middleware is like different Departments in Company
//?   These all functions are called MIDDLEWARE functions

//! 1. Depratment
//*    Received Data ko Manage krne k liye " bodyParser " use hoga
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//! 2. Department
//?     Ye iss liye k koi bhi iss folder ko access kr skta hy ( like: Client Side )
app.use(express.static(path.join(process.cwd(), "public")))

//?     Konsa Engine
app.set("view engine", "ejs");
//?     Konsa folder (Views k liye)
app.set("views", "views");

//! 3. Department
//?     Middleware Function
app.use((req, res, next) => {        //?  Auth Middleware
    // console.log(req.url);
    req.data = "Awais";
    next();
    //?     "next()" agly department(function) ko call kr de ga 
})

//! 3. Department
// app.use((req, res, next) => {
    // res.send(req.url);
    // res.send(req.data);
// })

//! 4. Department

app.use("/auth", auth);
app.use("/form", form);
app.use("/todo", todo);
app.use("/products", products);
app.use("/persons", persons);
app.use("/students", students);
app.use("/relation", relation);

// app.listen(3000);