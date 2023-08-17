const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: Number, required: true },
});
const classSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  students: [{ type: 'ObjectId', ref: 'Student'}]
})
const Student = new mongoose.model("Student", studentSchema);
const myClass = new mongoose.model("myClass", classSchema);

// studentSchema.pre("save", function(next){
//     let student = this;
//     if (!student.name) {
//       console.log("Bro Name is reuired");
//     }
//     // console.log(student);
//     next();
//   });
//!   Document Middleware  
//?   1. this === document  on which save() is called
//?   2. this === res   ==>>  true

// studentSchema.post("save", function(res){
//   console.log(res);
// })

//!   Model Middleware
//?   1. this === Model 
//?   2. insertMany() is static function 
//?   3. res === inserted documents

// studentSchema.post("insertMany", function(res){
//   console.log(  );
//   console.log(res[0]);
//   console.log(res[1].name);
// })

// const model = async () =>  {
//   const data = await Student.insertMany([{ name: "Ali", roll: 90 }, { name: "Auoooo", roll: 78}])
//   console.log(data);
// }
// model()

//!   Aggrgate Middleware
// const aggregate = async (res) => {
//   await Student.create({ name: "Sui", roll: 67 });
//   await Student.create({ name: "Tippu", roll: 111 });
//   const docs = await Student.aggregate([{ $match: { roll: { $lte: 70 } } }])
//   console.log(docs);
// }
// aggregate();

//!   Query Middleware

// studentSchema.pre("find", function() {
//   console.log('Find', this.getQuery());
// });
// const queryFunc = async () => {
//   const query = Student.find({ roll: { $gte: 90 } });
//   console.log(query);
// }
// queryFunc()

//    *********************      Population        ******************  //

// const pop = async () => {
//   const story = await Student.findOne({ name: 'Awais' }).populate('roll').exec();
//   console.log(story);
// }
// pop();



module.exports = { Student, myClass };
