const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    sku:{type:String,required:true,unique:true}
    // image_urls: [{ type: String, required: true }],
    
}, {
    versionKey: false,
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema);