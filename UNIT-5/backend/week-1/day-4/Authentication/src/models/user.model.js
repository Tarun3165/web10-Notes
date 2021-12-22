const mongoose = require("mongoose")

const bcrypt=require("bcryptjs")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    roles:[{type: String, required: true }]
    
}, {
    versionKey: false,
    timestamps:true,
})

//for registration
// we want to hash the password , and pre is an event which happen before the password is saved . happens two times , when creating the passsword and when updating the password
userSchema.pre("save", function (next) {    // we cannot use this if used arrow function
    if (!this.isModified("password"))
        return next();
    
    // console.log("before",this.password);
    
    const hash = bcrypt.hashSync(this.password,8);

    this.password = hash;
    // console.log("after",this.password);
    return next();
    
})

//for login
userSchema.methods.checkPassword = function (password) {
    
    return bcrypt.compareSync(password,this.password); 
}

module.exports = mongoose.model("user",userSchema);