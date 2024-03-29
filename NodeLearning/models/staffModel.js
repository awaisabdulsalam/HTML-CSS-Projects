const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);
