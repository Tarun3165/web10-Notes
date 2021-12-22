const express = require("express"); 
const users = require("./users.json")
const app = express();
app.use(express.json())    // inbuilt express middleware
// app.use (logger) // middle ware
 
// app.post("/users",(request,response) => {    
   
//     return response.send(request.body)
//     })

    app.get("/users", (request, response) => {  
    
         
        return response.send( {data:users})
    })
    app.post("/users",logger, (request,response) => {
        let x = request.body;
        users.push(x);
        console.log(users);
         response.send(users);
        
     })
     
app.patch("/users/:id", (request, response) => {
    const users = await User.findByIdAndUpdate(request.params.id,request.body,{new:true}).lean().exec();
    return response.send(users)
       
     })
     
     app.delete("/users/:id", (request,response) => {
        return response.send( {id:request.params.id}) 
    })
    
    function logger(request, respond, next) { 
        next();
    }
    

app.listen(2345,() => {
    
    console.log("listening on port 2345");
})

 
 

 
 