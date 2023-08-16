const express = require("express");
const router = express.Router();

const Student = require("../models/db/student");
const students = require("../data/students.json");

router.get("/", (req, res) => {
    res.json(students)
})

router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    roll: req.body.roll,
  });
  const respo = await student.save();
  res.send(respo);
});


module.exports = router;
