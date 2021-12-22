const express = require("express");
const Student = require("../models/student.model")
const router = express.Router();

router.post("", async (req,res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
             city:req.body.city,
             age:req.body.age,
             education:req.body.education,
             gender:req.body.gender,
             contact:req.body.contact
            
        })
        return res.status(200).send({ "student": student });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("", async (req,res) => {
    try {
        const student = await Student.find().sort().lean().exec();
        
        return res.status(200).send({ "student": student ,"studentCount":student.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("/sort/age", async (req,res) => {
    try {
        
        const student = await Student.find().sort({"age":1}).lean().exec();
        
        return res.status(200).send({ "student": student ,"studentCount":student.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("/sort/name", async (req,res) => {
    try {
        
        const student = await Student.find().sort({"name":1}).lean().exec();
        
        return res.status(200).send({ "student": student ,"studentCount":student.length});
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})


router.delete("/:id", async (req,res) => {
    try {
        const student = await Student.deleteOne({"_id":req.params.id});
      
        return res.status(200).send({ "student": student });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.get("/:id", async (req,res) => {
    try {
        const student = await Student.find({"_id":req.params.id}).lean().exec();
        
        return res.status(200).send({ "student": student });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const student = await Student.deleteOne({"_id":req.params.id});
      
        return res.status(200).send({ "student": student });
    }
    catch (err) {
        res.status(400).send({ "error": err.message });
    }
})

module.exports = router;