const express = require("express");
const User = require("../models/user.model")
const router = express.Router();
const upload=require("../middlewares/file-upload")
const fs=require("fs")  


router.post("/single", upload.single(`profile_pic`) , async function (req, res) {
    
    console.log(req.file);
  
    try {
            
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
        })
        
        return res.status(201).send({"user":user})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
})

router.patch("/single/:id", upload.single(`profile_pic`) , async function (req, res) {
    
    const profile_pic= req.file.path
    try {
        const userDetails = await User.findById(req.params.id).lean().exec();
        // console.log('userDetails:', userDetails.profile_pic)
        fs.unlinkSync(userDetails.profile_pic);
      
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     
        return res.status(201).send({...user,profile_pic:profile_pic})
       
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
})

router.delete("/single/:id" , async function (req, res) {
    
    // const profile_pic= req.file.path
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
      
        fs.unlinkSync(user.profile_pic);
      
        return res.status(201).send(user)
       
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
    
})



module.exports = router;