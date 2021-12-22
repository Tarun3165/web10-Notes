const express = require("express");
const Product = require("../models/product.model")
const { body, validationResult } = require('express-validator');

const router = express.Router();


router.post("/",
   
    body("title").
        isLength({min:2}).withMessage('title must have atleast 2 characters'),
    
    body("price").notEmpty().custom((value) => {
        if (value <= 0) throw new Error("product cannot be free")
        return true;
    }),
    body("sku").notEmpty().custom(async (value,{req}) => {
        const product = await Product.findOne({ "sku": value,"price":req.body.price }).lean().exec();
        if (product ) throw new Error("product already exist  ")
        return true;
    }),
    async function (req, res) {
    
    try {
         
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        product = await Product.create(req.body)
       
        return res.status(201).send(product)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
})



module.exports = router;