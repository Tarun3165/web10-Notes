const express = require("express");
const app = express();
const users = require("./users.json")

app.use(express.json())    // inbuilt express middleware
// app.use (logger) // middle ware
 //  without middleware request.body will not  work
 
 
// middle ware is used to parse the data 
app.get("/users",logger, (request, response) => {  // logger is that is used in between router and callback function . can write as many loggers a we want
    
    console.log("line 9",request.name);   // this will run after logger
    return response.send( {data:users})
})
 
// not allowing any request without name tarun
app.post("/users", logger({name: "tarun"}) ,(request,response) => {        // /users is called a route handler
//    console.log(request.body);   // without middleware it prints undefined
   console.log("welcome Tarun");
return response.send(request.body)
})

app.patch("/users/:id",  (request,response) => {    
    
    return response.send("testing patch")
})

app.delete("/users/:id",logger,  (request,response) => {    // request is anything that comes out of postman or frontend
     console.log("id:",request.params.id);       // whatever we take from postman is in the form of json or string
    return response.send( {id:request.params.id})    // params for parameter
})
 
function logger(dataObj) {      // in place of logger we can write something else as well 
    return function (request, response, next) {
        console.log(dataObj);
        console.log(request.body.name);
   if(request.body.name==dataObj.name)    
            next();
    else return response.send("you are not authorized to access this")
    // request.name="tarun"      // request is an object  , here u are updating the name and the objects having the same reference will get updated.
 }
}
 
 

app.listen(2345, ()=>{
    console.log("listning on port 2345");
})

 