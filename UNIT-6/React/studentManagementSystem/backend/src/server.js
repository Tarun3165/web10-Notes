const express = require("express");
const app = express();
const connect = require("./config/db");
const cors=require("cors")
const studentController=require("./controllers/student.controller")
const contestController=require("./controllers/contest.controller")

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods:["GET","POST","DELETE"]
}))
app.use("/students",studentController)
app.use("/contests",contestController)

app.listen(2345, async () => {
    await connect();
    console.log("Listning at port 2345");
})