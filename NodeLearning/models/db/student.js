const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: Number, required: true },
});

studentSchema.pre("save", function(next){
    let student = this;
    if (!student.name) {
      console.log("Bro Name is reuired");
    }
    console.log(student);
    next();
});
studentSchema.post("save", function(res){
  console.log(res);
})

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
