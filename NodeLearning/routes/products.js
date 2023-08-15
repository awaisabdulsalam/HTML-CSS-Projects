const express = require("express");
const router = express.Router();

const Product = require("../models/db/product");
const products = require("../data/products.json");

router.get("/", (req, res) => {
    res.json(products);
});

router.post("/", async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price
    });
    //?  save() method returns a Promise()
    //?  if save() succeeds the Promise() resolve to product document else ERROR
    const respo = await product.save();
    res.send(respo);
});

router.get("/:id", async (req, res) => {
    const resp = await Product.findById(req.params.id);
    res.send(resp);
})

module.exports = router;
