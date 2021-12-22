
const express = require("express");
  
const router = express.Router();


const User=require("../models/users.model")
// const Post=require("../models/posts.model") 
// const Comment=require("../models/comments.model")
 

router.post("/", async (req, res) => {
    try { 
        const user = await User.create(req.body); 
        return res.status(201).send(user);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
router.get("/", async function (req, res) {
    try {
        const users = await User.find( ).lean().exec() 
        return res.send(users);
    }
    catch (err) {
        return res.status(400).send(err.message) 
     }
        
})


// router.get("/:id", async function(req, res){
//     try {
//         const users = await User.findById(req.params.id).lean().exec()
//         res.send(users);
//     }
//     catch (err) {
//         return res.status(400).send(err.message) 
//     }
       
// })

// router.patch("/:id", async function (req, res) {
//     try {
//         const users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//         return res.status(203).send(users)
//     }
//     catch (err) {
//         return res.status(400).send(err.message)
//     }
// })

// router.delete("/:id", async function (req, res) {
//     try {
//         const users = await User.findByIdAndDelete(req.params.id).lean()
//         return res.status(205).json({users:users})
//     }
//     catch (err) {
//         return res.status(400).send(err.message)
//     }
// })
 
// router.get("/:id/posts", async function(req, res){
//     try {
//         const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
//         const user = await User.findById(req.params.id)
//         res.status(200).json({posts: userPosts, user: user});
//     }
//     catch (err) {
//         return res.status(400).send(err.message) 
//     }
       
// })
 

module.exports = router;