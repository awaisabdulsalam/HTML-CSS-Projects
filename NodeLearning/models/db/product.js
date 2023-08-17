const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number
});
const userSchema = new mongoose.Schema({ 
    name: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
})

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const pop =  async () => {
    const found = await User.find().populate("postedBy")
    console.log(found);
}
pop()


//?   ************       Aggregate        *************
// const schema = mongoose.Schema({ name: String, age: Number });
// const Model = mongoose.model('Character', schema);
// Model.create({ name: "Awais", age: 21 });
// const docs = Model.aggregate([{
//     $match: { age: { $gte: 10 } }
// }
// ]);
// console.log(docs[0].name);
module.exports = Product;   

