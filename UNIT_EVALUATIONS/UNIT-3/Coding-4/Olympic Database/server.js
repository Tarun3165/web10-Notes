const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/olympicData",
    
       {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify:false      
       })
    
}

const productSchema = new mongoose.Schema({
    price: { type: String, required: true },
    
    colour: [{
        type:String,
        required:true,
    }],
    canBeUsedBy: [{
        type: String,
        required: true,
    }],
    
}, {
    versionKey: false,
    timestamps:true
})

const Prod = mongoose.model("product1", productSchema);

app.post("/products", async  (req, res) => {
    try {
        const product = await Prod.create(req.body);
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})


app.get("/products", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
app.patch("/products/:id", async (req, res) => {
    try {
        const product = await Prod.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
app.delete("/products/:id", async (req, res) => {
    try {
        const product = await Prod.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.get("/products/price", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        const productWithPriceLessThan5000 = {};
        product.forEach(async productObj => {
            var productId = productObj._id;
            if (productObj.price > 5000)
                productWithPriceLessThan5000[productId] = productObj;
        })
        return res.status(200).json({productWithPriceLessThan5000:productWithPriceLessThan5000});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})


app.get("/products/colour", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        const productWithColoursgreater3 = {};
        product.forEach(async productObj => {
            var productId = productObj._id;
        
            if (productObj.colour.length > 3)
            productWithColoursgreater3[productId] = productObj;
        })
        return res.status(200).json({productWithColoursgreater3:productWithColoursgreater3});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.get("/products/mostColours", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        var largest = 0;
        var largestProductId = "";
        const productWithMostColours = {};
        product.forEach(async productObj => {
            var productId = productObj._id;
            
            if (productObj.colour.length > largest)
            {   largest=productObj.colour.length
                largestProductId = productId;
            }
            
        })
        const thatProduct = await Prod.findById(largestProductId).lean().exec()
        productWithMostColours[largestProductId] = thatProduct;
        return res.status(200).json({productWithMostColours:productWithMostColours});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.get("/products/usedByBoth", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        const productsThatBothCanUse = {};
        product.forEach(async productObj => {
            var productId = productObj._id;
        
            if (productObj.canBeUsedBy.length ==2)
            productsThatBothCanUse[productId] = productObj;
        })
        return res.status(200).json({productsThatBothCanUse:productsThatBothCanUse});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.get("/products/totalProducts", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        var totalproducts = 0;
        product.forEach(async productObj => {
            var productId = productObj._id; 
            totalproducts+=productObj.colour.length
          
        })
        console.log("totalproducts",totalproducts);
        return res.status(200).json({totalproducts:totalproducts});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

var colourObj = {};    
app.get("/products/favouriteColour", async (req, res) => {
    var favColour = "";
    try {
        const product = await Prod.find().lean().exec()
        product.forEach(async productObj => {
            var productId = productObj._id; 
            var colours = productObj.colour;
            for (let i = 0; i < colours.length;i++)
            {
                if (colourObj[colours[i]] == undefined)
                    colourObj[colours[i]] = 1;
                else
                    colourObj[colours[i]] += 1;
                }
            var largest = 0;
            for(key in colourObj)
            {
                if (colourObj[key] > largest)
                {
                    largest = colourObj[key];
                    favColour = key;
                }
            }
          
        })
        console.log(colourObj);
        console.log("favouriteColour",favColour);
        return res.status(200).json({favouriteColour:favColour});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.get("/products/matchingColour", async (req, res) => {
    try {
        const product = await Prod.find().lean().exec()
        const productsWithMatchingColour = {};
        
        product.forEach(async productObj => {
            var productId = productObj._id;
            var ObjColourArr = productObj.colour;
            for (let i = 0; i < ObjColourArr.length;i++)
            { 
                for(key in colourObj)
                {
                    if (ObjColourArr[i]== key && colourObj[key]>1 )
                    { 
                        productsWithMatchingColour[productId] = productObj;
                         
                    }
                }
            }
          
        })
        return res.status(200).json({productsWithMatchingColour:productsWithMatchingColour});
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
    
app.listen(2021, async () => {
    await connect();
    console.log("listming at port 2021");
})