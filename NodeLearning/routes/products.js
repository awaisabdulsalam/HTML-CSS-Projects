const express = require("express");
const router = express.Router();

const Product = require("../models/db/product");
const products = require("../data/products.json");

router.post("/", async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price
    });
    const respo = await product.save();
    res.send(respo);
});

module.exports = router;
