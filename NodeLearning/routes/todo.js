const express = require("express");
const path = require("path");
const { getAllTodos, addTodo, markAsDone } = require("../controllers/todo");

const router = express.Router();

router.get("/", (req, res) => {
    // res.send(getAllTodos());
    res.render("todo", { todos: getAllTodos() });
});

router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.send(req.body.data)
})

module.exports = router;