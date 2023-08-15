const mongoose = require("mongoose");

const perSchema = new mongoose.Schema({
    name: String,
    check: Boolean,
    num: Number,
});

const Person = mongoose.model("Person", perSchema);

module.exports = Person;