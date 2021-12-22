const express = require("express");
const connect = require("./config/db");

const app = express();

const userController=require("./controllers/user.controller")


app.use(express.json());

app.use("/login",userController)

app.listen(2345, async () => {
    await connect();
    console.log("listening on port 2345");
})

