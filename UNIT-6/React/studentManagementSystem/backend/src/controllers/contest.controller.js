const express = require("express");
const Contest = require("../models/contest.model")
const router = express.Router();

router.post("", async (req,res) => {
    try {
        const contest = await Contest.create({
            title: req.body.title,
             type:req.body.type,
             deadline:req.body.deadline,
             tags:req.body.tags,
             time:req.body.time,
            
            
        })
        return res.status(200).send({ "contest": contest });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("", async (req,res) => {
    try {
        const contest = await Contest.find().lean().exec();
        
        return res.status(200).send({ "contest": contest ,"contestCount":contest.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})


router.get("/deadline", async (req,res) => {
    try {
        
        const contest = await Contest.find().sort({"deadline":1}).lean().exec();
        
        return res.status(200).send({ "contest": contest ,"contestCount":contest.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("/coding", async (req,res) => {
    try {
        const contest = await Contest.find({"type":"Coding"}).lean().exec();
        
        
        return res.status(200).send({ "contest": contest ,"contestCount":contest.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("/dsa", async (req,res) => { 
    try {
        const contest = await Contest.find({"type":"DSA"}).lean().exec();
        
        return res.status(200).send({ "contest": contest ,"contestCount":contest.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const contest = await Contest.deleteOne({"_id":req.params.id});
      
        return res.status(200).send({ "contest": contest });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})




module.exports = router;