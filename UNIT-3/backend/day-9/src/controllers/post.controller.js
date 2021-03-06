const express = require("express");

const router = express.Router();

 
const Post=require("../models/posts.model")


router.post( "",async function(req, res){
    try {
        
        const post = await Post.create(req.body)
        return res.status(201).send(post);
        
    }
    catch(err) {
        
        return res.status(400).send(err.message)
        
    }
    
})

router.get( "", async function (req, res) {
    try {
        const posts = await Post.find().lean().exec();
        
        return res.status(201).send(posts)
        
    }
    catch(err) {
        
        return  res.status(400).send(err.message)
        
    }
    
})

 
router.get(" /:id", async function (req, res) {
    try {
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send(post)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
router.patch("/:id", async function (req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(post)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

router.delete(" /:id", async function (req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({post:post})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

module.export=router
