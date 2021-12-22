require("dotenv").config();

const  jwt  = require("jsonwebtoken")

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
            if(err)
                return reject(error)
            
            return resolve(user)
            
        })
    })
}
 
module.exports = async (req, res, next) => {
    //check if autherization headers is present if not throw an error
    const bearerToken = req?.headers?.authorization

    //check if autherization header has a bearer token
    if(!bearerToken)
    return res.status(401).json(({status:"error",message:"you did not send the authorization header"}))

    
    //check if  bearer token starts with "Bearer "
    //if not throw error
    if(!bearerToken.startsWith("Bearer "))
        return res.status(400).json({
            status: "error",
            message:"you did not send the authorization header"
    })
     
     //extract the token from the bearer token
     const token = bearerToken.split(" ")[1];

    //decrypt the token and try to fetch the user
    try {
        const user=await verifyToken(token)  //geting the user from the bearer token
        // console.log('user:', user.user)
    
        if (!user)
        return res.status(401).json({status:"you are not sending the correct  token"})
        
        ///add the user to the request
    
        req.user = user.user;  
        //retrun next
    
       
        return next();
         
    }
    catch (err) {
        
        return res.status(401).json({status:"401 unautherized"})
    }
}