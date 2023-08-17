const express = require("express");
const router = express.Router();

const Student = require("../models/db/student");
const myClass = require("../models/db/student");
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

router.get("/classname", (req, res) => {
  myClass.find({}).exec((err, docs) => {
    if (err) throw err;
    res.json(docs);
  });
});

router.post("/classname", (req, res) => {
  let cl = new myClass({ name: req.body.name, students: [] });
  cl.save((err) => {
    if(err) res.json({ "error": err });
    else res.json(cl);
  })
})


module.exports = router;
