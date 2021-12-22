const express=require("express")

const router = express.Router();
const sendEmail=require("../utills/sendMail")

const User=require("../models/user.model")
router.post("/", async (req, res) => {
    try {
        
        const user = await User.create(req.body)
          
        await sendEmail({
            to: user.email, // list of receivers
            subject: "verification Email", // Subject line
            text: "verification Email", // plain text body
            html: "<h1>verification Email</h1>", // html body
        });
        return res.status(201).json({ user: user });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err })
    }
})

router.get("/", async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
    
        const offset = (page - 1) * size;

        const users = await User.find().skip(offset).limit(size).lean().exec();
        const totalPages = Math.ceil(await User.find().countDocuments() / size);
        return res.status(200).json({ users: users,totalPages:totalPages });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message })
    }
})

module.exports = router;