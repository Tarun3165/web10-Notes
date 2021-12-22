const express= require("express");
const  connect  = require("./config/db");

const galleryController=require("./controllers/gallery.controller")
const userController=require("./controllers/user.controller")

const app = express();

app.use(express.json());


app.use("/gallery",galleryController)
app.use("/users",userController)

app.listen( 3456, async function (){
    await connect();
    console.log("listning on port 3456");
})