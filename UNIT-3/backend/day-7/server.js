// npm init -y , npm install express  ,npm install mongoose@5.11.15 ,npm install -g nodemon
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())  //middleware
 
// first we need to have express to connect to mongo
 // connect returns a promise
const connect = () => {  
    return mongoose.connect('mongodb://127.0.0.1:27017/web10mongoose',  // a databse web10mongoose is created
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false      //to remove deprecation warning
        })
     
}
// then we need to create a schema
const userSchema = new mongoose.Schema({ 
    firstName: String,
    lastName: String,
    email: String, 
    gender: String,
    age: Number
}, {
    versionKey: false,
    timestamps: true  
});

// then we will tell mongoose to create that collection inside mongodb with the given schema and also create a model that will allow us to interact with mongodb easily
 
//--------CRUD operations for user----------

// User is a class .   user is a collection and it will be based upon the schema , and it is users collction in mongodb
const User = mongoose.model("user", userSchema);   

app.post("/users", async (req, res) => {  
    try { 
        const user = await User.create(req.body); 
        return res.status(201).send(user);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

//.lean() is used to convert object data to json data
// . exec is used to return a proper promise , without .exec it return a thennable promise i.e we need to write .then to make it a proper promise.
app.get("/users", async function (req, res) {
    try { 
        const users = await User.find( ).lean().exec() 
        return res.send(users);
    }
    catch (err) {
        return res.status(400).send(err.message) 
     }
        
})


app.get("/users/:id", async function(req, res){
    try {
        const users = await User.findById(req.params.id).lean().exec()
        res.send(users);
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})

app.patch("/users/:id", async function (req, res) {
    try {
        const users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(users)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/users/:id", async function (req, res) {
    try {
        const users = await User.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({users:users})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
  
app.get("/users/:id/posts", async function(req, res){
    try {
        const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
        const user = await User.findById(req.params.id)
        res.status(200).json({posts: userPosts, user: user});
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})

app.get("/users/:id/posts", async function (req, res) {
    const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
    let userPostsWithComments = {};
    userPosts.forEach(async post => {
        const postId = post._id;
        const comment = await getUserPostsWithComments(post);
        userPostsWithComments[postId] = {};
        userPostsWithComments[postId]["post"] = post;
        userPostsWithComments[postId]["comments"] = comment;
    })
    const user = await User.findById(req.params.id)
    return res.status(200).json({ postsWithComments: userPostsWithComments, user: user })
})
async function getUserPostsWithComments(post) {
    const comment = await Comment.find({ postId: post._id }).lean().exec()
    return comment
}

//post schema and model
// -title and body
const postSchema = new mongoose.Schema({
 
     // we need both user id and tag id to post
    
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {     // as user and post has one to many relation
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },
    tagIds: [{   //posts can be much much greater then no. of tags , so used tags in posts
        type:mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required:true,
    }]
}, {
    versionKey: false,  //__V will not come 
    timestamps: true   // for updated at and created at
});

//--------CRUD operations for post----------

const Post = mongoose.model("post", postSchema);  //posts by mongoose
app.post("/posts",async function(req, res){
    try {
        
        const post = await Post.create(req.body)
        return res.status(201).send(post);
        
    }
    catch(err) {
        
        return res.status(400).send(err.message)
        
    }
    
})

app.get("/posts", async function (req, res) {
    try {
        const posts = await Post.find().lean().exec();
        
        return res.status(201).send(posts)
        
    }
    catch(err) {
        
        return  res.status(400).send(err.message)
        
    }
    
})

//get/posts/:id
app.get("/posts/:id", async function (req, res) {
    try {
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send(post)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

//patch/posts/:id
app.patch("/posts/:id", async function (req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(post)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/posts/:id", async function (req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({post:post})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})


//commment Schema model
// -commentBody

const commentSchema = new mongoose.Schema({
    commentBody: { type: String, required: true },
    postId: {    // this means that first post will be created
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required:true,
    }
    
}, {
    versionKey: false,  //__V will not come 
    timestamps: true   // for updated at and created at
});


//--------CRUD operations for comment----------
const Comment = mongoose.model("comment", commentSchema);  //posts by mongoose
app.post("/comments",async function(req, res){
    try {
        
        const comment = await Comment.create(req.body)
        return res.status(201).send(comment);
        
    }
    catch(err) {
        
       return res.status(400).send(err.message)
        
    }

})

app.get("/comments", async function (req, res) {
    try {
        const comment = await Comment.find().lean().exec();
       
      return res.status(201).send(comment)
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
    
})

app.get("/comments/:id", async function (req, res) {
    try {
        const comment = await Comment.findById(req.params.id).lean().exec();
        return res.status(200).send(comment)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.patch("/comments/:id", async function (req, res) {
    try {
        const comment = await Comment(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(comment)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/comments/:id", async function (req, res) {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({comment:comment})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})


 

//tag Schema model 
// -name

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
    
}, {
    versionKey: false,  //__V will not come 
    timestamps: true   // for updated at and created at
});

//--------CRUD operations for tag----------
const Tag = mongoose.model("tag", tagSchema);  //posts by mongoose
app.post("/tags",async function(req, res){
    try {
        
        const tag = await Tag.create(req.body)
        return res.status(201).send(tag);
        
    }
    catch(err) {
       
       return res.status(400).send(err.message)
        
    }

})

app.get("/tags", async function (req, res) {
    try {
        const tag = await Tag.find().lean().exec();
       
      return res.status(201).send(tag)
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
     
})

app.get("/tags/:id", async function (req, res) {
    try {
        const tag = await Tag.findById(req.params.id).lean().exec();
        return res.status(200).send(tag)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.patch("/tags/:id", async function (req, res) {
    try {
        const tag = await Tag(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(tag)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/tags/:id", async function (req, res) {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({tag:tag})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.listen(2345, async () => {
    await connect();
    console.log("listening on port 2345");
})



 