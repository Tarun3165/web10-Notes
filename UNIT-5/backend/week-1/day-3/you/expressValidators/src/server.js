const express= require("express");
const  connect  = require("./config/db");

const productController=require("./controllers/product.controller")

const app = express();

app.use(express.json());


app.use("/products",productController)

app.listen( 3456, async function (){
    await connect();
    console.log("listning on port 3456");
})