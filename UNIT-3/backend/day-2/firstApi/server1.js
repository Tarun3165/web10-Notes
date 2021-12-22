 const express=require("express")

 const user = require("./users.json");
const app = express();
// app.use(express.json());
 

app.get("/", (request,response) => {
    return response.send("Welcome to Home page")
})
app.get("/users", (request,response) => {
    return response.send(user)
})
app.post("/users",logger, (request,response) => {
    let x = request.body;
    console.log(x);
    let details = [...user, x]
    response.send(details);
    
})
 
app.patch("/users/:id", (request,response) => {
    return response.send(user)
})

app.delete("/users/:id", (request,response) => {
    return response.send( {id:request.params.id}) 
})

function logger(request, respond, next) {
    
    next();
}
app.listen(2020, () => {
    console.log("Listning at 2020");
});