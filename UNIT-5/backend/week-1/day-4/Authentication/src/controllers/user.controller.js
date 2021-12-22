const jwt = require("jsonwebtoken")
require("dotenv").config();

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({ user: user },process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {
  
    try {
        
       
         //first check if the user with that email already  exist
         let user=await User.findOne({email:req.body.email}).lean().exec()
         
         
         //if exist throw err
         if(user) return res.status(400).json({status:"error",message:"User exists"})
         
         // otherwise create a user and then hash the password
         //encrypt can be decrypted but hashing cannot
          user = await User.create({
              email: req.body.email,
             password: req.body.password,
             roles: req.body.roles,
             
         });
            
            
         //create a token
        const token = newToken(user);
        
     
         //then return the token and the user info to the frontend
         
         
         return res.status(201).json({user,token})
        }
        catch (err) {
            return res.status(400).json({"err":err.message})
        }
        
    }
    
    
    const login = async (req, res) => {
        
        try {
            //first check if user with that email is present
            let user = await User.findOne({ email: req.body.email }).exec();   // using lean will give error as it will give json object but we want mongoose object so that checkPassword can be called wchich is in a method of userSchema
          
            
            //if not user then throw error
            if(!user) return res.status(400).json({status:"error",message:"register first"})
            
            // if user then match the password
          
            const match =user.checkPassword(req.body.password)
            
            
            // if not match then throw error
            if(!match) return res.status(400).json({status:"error",message:"register first"})

            // if match then create the token . token will be same as after registration
            const token = newToken(user);
          
            
            //return the token to the frontend
             return res.status(200).json({user,token})
 
    }
    catch (err) {
        return res.status(400).json({"error":err.message})
        
    }

 
}

module.exports={register,login,newToken}