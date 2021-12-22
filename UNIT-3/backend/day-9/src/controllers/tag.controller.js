const express = require("express");

const router = express.Router();

 
const Tag=require("../models/tags.model") 
  
router.post(" ",async function(req, res){
    try {
        
        const tag = await Tag.create(req.body)
        return res.status(201).send(tag);
        
    }
    catch(err) {
       
       return res.status(400).send(err.message)
        
    }

})

router.get("", async function (req, res) {
    try {
        const tag = await Tag.find().lean().exec();
       
      return res.status(201).send(tag)
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
     
})

router.get("/:id", async function (req, res) {
    try {
        const tag = await Tag.findById(req.params.id).lean().exec();
        return res.status(200).send(tag)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

router.patch("/:id", async function (req, res) {
    try {
        const tag = await Tag(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(tag)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

router.delete("/:id", async function (req, res) {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({tag:tag})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

module.export=router
