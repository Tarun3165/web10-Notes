const express = require("express");
const Gallery = require("../models/gallery.model")

const fs=require("fs")

const router = express.Router();
const upload=require("../middlewares/file-upload")


router.post("/multiple", upload.any(`pictures `), async function (req, res) {
    // console.log(req.files);
    const filesPaths = req.files.map((file) => file.path);

    console.log('filesPaths:', filesPaths)
    try {
        const gallery = await Gallery.create({
            user_Id: req.body.user_Id,
            pictures :filesPaths
        })
 
        return res.status(201).send({"gallery":gallery})
    }
    catch (err) {
        filesPaths.map((path) => fs.unlinkSync(path));
        return res.status(400).send(err.message)
        
    }
})
router.delete("/multiple/:id", async function (req, res) {
  
  

    try {
        const gallery = await Gallery.findByIdAndDelete(req.params.id).lean().exec();
        // console.log('gallery:', gallery.pictures)
        
        gallery.pictures.map((path) => fs.unlinkSync(path));
       
 
        return res.status(201).send(gallery)
    }
    catch (err) {
        return res.status(400).send(err.message)
        
    }
})


module.exports = router;