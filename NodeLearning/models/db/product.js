const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    taste: { type: Boolean, require: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;   

