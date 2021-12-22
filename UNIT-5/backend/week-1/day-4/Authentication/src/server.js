const express= require("express");

const connect  = require("./config/db");

const passport=require("./config/passport")

const {register,login}=require("./controllers/user.controller")
const productController=require("./controllers/product.controller")

const app = express();

app.use(express.json());

app.use(passport.initialize());


passport.serializeUser(function(user, done) {
 
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
  
    done(null, user);
  });

// app.get("/auth/google/success", function (req, res) {
//     
//       return res.send(req.user)
// })

app.get("/auth/google/failure", function (req, res) {
    return res.send("something went wrong")
})

app.get('/auth/google',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email',
           
            ]
    }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        // successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    })
      , function (req, res) {
      
        return res.send(req.user)
});

app.post("/register", register);
app.post("/login", login);
app.use("/products", productController);


app.listen( 3456, async function (){
    await connect();
    console.log("listning on port 3456"); 
})