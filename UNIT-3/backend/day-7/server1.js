 
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())   

const connect = () => {  
    return mongoose.connect('mongodb://127.0.0.1:27017/movie',   
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false      
        })
     
}
 
const movieSchema = new mongoose.Schema({ 
    movie_name: String,
    movie_genre: String,
    production_year : Number,  
    budget: Number
}, {
    versionKey: false,
    timestamps: true  
});

 
const Movie = mongoose.model("movie", movieSchema);  

app.post("/movies", async (req, res) => {
    try { 
        const movie = await Movie.create(req.body); 
        return res.status(201).send(movie);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
app.get("/movies", async function (req, res) {
    try {
        const movie = await Movie.find( ).lean().exec() 
        return res.send(movie);
    }
    catch (err) {
        return res.status(400).send(err.message) 
     }
        
})


app.get("/movies/:id", async function(req, res){
    try {
        const movie = await Movie.findById(req.params.id).lean().exec()
        res.send(movie);
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})

app.patch("/movies/:id", async function (req, res) {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(movie)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/movies/:id", async function (req, res) {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({movie:movie})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}) 

app.listen(2345, async () => {
    await connect();
    console.log("listening on port 2345");
})



 