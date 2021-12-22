const express = require("express");
const Product = require("../models/product.model")

const fs=require("fs")

const router = express.Router();
const upload = require("../middlewares/file-upload")



router.post("/single", upload.single(`images`) , async function (req, res) {
    
    // console.log(req.file ); 
    try {
            
        const product = await Product.create({
            title: req.body.title,
            price: req.body.price,
            image_urls: req.file.filename
        })
        
        return res.status(201).send({"product":product})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
    
})
router.post("/multiple", upload.any(`images`), async function (req, res) {
 
    const filesPaths = req.files.map((file) => file.path);

    // console.log('filesPaths:', filesPaths)
    try {
        const product = await Product.create({
            title: req.body.title,
            price: req.body.price,
            image_urls:filesPaths
        })
 
        return res.status(201).send({"product":product})
    }
    catch (err) {
        filesPaths.map((path) => fs.unlinkSync(path));
        return res.status(400).send(err.message)
        
    }
})


module.exports = router;