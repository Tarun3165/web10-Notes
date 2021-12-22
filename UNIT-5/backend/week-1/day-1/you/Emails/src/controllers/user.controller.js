const express=require("express")

const router = express.Router();
const sendEmail=require("../utills/sendMail")

const User=require("../models/user.model")
router.post("/", async (req, res) => {
    try {
        
        const user = await User.create(req.body)
          
        await sendEmail({
            to: user.email, // list of receivers
            subject: ` Welcome to ABC system ${user.first_name} ${user.last_name}`, // Subject line
            text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
            html: `Hi ${user.first_name}, Please confirm your email address`, // html body
        });

        await sendEmail({
            to: "tarun@gmail.com,dhawal@gmail.com,nrupul@gmail.com,swanand@gmail.com,prabhanjan@gmail.com", // list of receivers
            subject: ` ${user.first_name} ${user.last_name} has registered with us`, // Subject line
            text: `Please welcome ${user.first_name} ${user.last_name}`, // plain text body
            html: `Please welcome ${user.first_name} ${user.last_name}`, // html body
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