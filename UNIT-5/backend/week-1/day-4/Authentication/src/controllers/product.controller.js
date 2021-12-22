const express = require("express");
const Product = require("../models/product.model")

const router = express.Router();

const authenticate=require("../middlewares/authenticate")
const authorize=require("../middlewares/authorize")

router.get("",authenticate,authorize(["admin","seller"]), async (req,res) => {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products)
})

router.post("", async (req,res) => {
    const products = await Product.create(req.body);
    return res.status(200).send(products)
}) 
 

module.exports = router;    