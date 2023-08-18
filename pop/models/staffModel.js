const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({ 
    name: { type: String },
    email: { type: String }
});

module.exports = mongoose.model("Staff", staffSchema);