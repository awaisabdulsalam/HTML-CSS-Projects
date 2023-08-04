const express = require("express");
const path = require("path");
const { getAllTodos, addTodo } = require("../controllers/todo");

const router = express.Router();

router.get("/", (req, res) => {
    // res.send(getAllTodos());
    res.render("todo", { todos: getAllTodos() });
});

router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.send("Todo Added")
})

module.exports = router;