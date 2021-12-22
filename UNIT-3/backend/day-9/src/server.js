 
const express = require("express");
// const mongoose = require("mongoose"); 
const app = express();
 
app.use(express.json());
 
const connect = require("./config/db")

// const User = require("./models/users.model")
// const Post = require("./models/posts.model")
// const Comment = require("./models/comments.model")
// const Tag = require("./models/tags.model")
 

const userController=require("./controllers/user.controller")    // this is what we exported from user.controller
const postController=require("./controllers/post.controller")
const commentController=require("./controllers/comment.controller")
const tagController=require("./controllers/tag.controller") 
 

app.use("/users", userController); 
app.use("/posts", postController); 
app.use("/comments", commentController); 
app.use("/tags", tagController); 
 

app.listen(2345, async () => {
    await connect();
    console.log("listening on port 2345");
})



 