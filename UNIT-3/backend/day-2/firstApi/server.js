const express = require("express");
const app = express();

//REST Api
//HTTP VERBS
//get =>whenever u want to get some data from the server
//post =>whenever u want to create some data from the server
//patch =>when u want to update some data in the server
//delete=>whenever u want to delete some data from the server

app.get("/users",  (request,response) => {    // "/users" is the end point in the api

    return response.send("testing get")
})
app.post("/users",  (request,response) => {    

    return response.send("testing post")
})
app.patch("/users/:id",  (request,response) => {    
 
    return response.send("testing patch")
})
app.delete("/users/:id",  (request,response) => {    
     
    return response.send("testing delete")  
})

app.listen(2345, ()=>{
    console.log("listning on port 2345");
})

 