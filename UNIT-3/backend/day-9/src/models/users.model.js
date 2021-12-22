const mongoose = require("mongoose"); 


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
 
const User = mongoose.model("user", userSchema);

module.exports=User
