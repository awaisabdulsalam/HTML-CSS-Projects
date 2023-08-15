const express = require("express");
const router = express.Router();
const persons = require("../data/persons.json");
const Person = require("../models/db/person");

router.get("/", (req, res) => {
    res.send(persons);
});

router.post("/", async (req, res) => {
    // const person = new Person({
    //     name: req.body.name,
    //     check: req.body.check,
    //     num: req.params.num
    // });
    // const respo = await person.save();
    // res.send(respo);
    const findPer = await Person.findOne({ _id: "64dba9aaab1ab3ae360b38e6"});
    findPer.title = "Kachaloo";
    await findPer.save();
});

module.exports = router;