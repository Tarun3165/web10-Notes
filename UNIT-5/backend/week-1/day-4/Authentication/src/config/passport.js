
require("dotenv").config();
const passport = require("passport")
const {v4:uuidv4}=require("uuid")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {newToken}=require("../controllers/user.controller")

const User=require("../models/user.model")

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_Id,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback   : true
  },
    async function (request, accessToken, refreshToken, profile, done)
    {
       
        try {
          let user=await User.findOne({email:profile?._json?.email}).lean().exec()


          if(!user)
          {
              user=User.create({email:profile?._json?.email,password:uuidv4()})
          }

          const token = newToken(user)
          user.token = token;
          return done(null, user);
        }
        catch (err) {
            return done(null, err);
            
        }

    }
  
));

module.exports=passport