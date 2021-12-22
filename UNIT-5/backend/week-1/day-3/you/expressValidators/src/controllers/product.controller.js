const express = require("express");
const Product = require("../models/product.model")
const { body, validationResult } = require('express-validator');

const router = express.Router();


router.post("/",
   
    body("first_name").notEmpty()
       .withMessage('first_name is required'),
    body("last_name").notEmpty()
       .withMessage('last_name is required'),
    body("email").notEmpty().isEmail()
       .withMessage('u have not provided correct email'),
    body("pincode").notEmpty().isLength({ min: 6 })
        .withMessage('pincode should be of 6 digits'),
    body("age").notEmpty().custom((value) => {
        if(value<1 || value>100)  throw new Error("age should be between 1 and 100")
     
        return true;
    }),

    body("gender").notEmpty().custom((value) => {
        if(value!="male" && value!="female")  throw new Error("gender should be male or female")
     
        return true;
    }),

    async function (req, res) {
    
    try {
         
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

       const product = await Product.create(req.body)
       
        return res.status(201).send(product)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
})



module.exports = router;