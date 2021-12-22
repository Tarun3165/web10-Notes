

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())  
 
 
const connect = () => {  
    return mongoose.connect('mongodb://127.0.0.1:27017/web10Library',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false      
        })
     
}
 
const sectionSchema = new mongoose.Schema({ 
    name: String, 
}, {
    versionKey: false,
    timestamps: true  
});

//--------CRUD operations for section----------
 
const Section = mongoose.model("section", sectionSchema);  

app.post("/sections", async (req, res) => {
    try { 
        const section = await Section.create(req.body); 
        return res.status(201).send(section);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
app.get("/sections", async function (req, res) {
    try {
        const section = await Section.find( ).lean().exec() 
        return res.send(section);
    }
    catch (err) {
        return res.status(400).send(err.message) 
     }
        
})


app.get("/sections/:id", async function(req, res){
    try {
        const section = await Section.findById(req.params.id).lean().exec()
        res.send(section);
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})

app.patch("/section/:id", async function (req, res) {
    try {
        const section = await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(section)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/sections/:id", async function (req, res) {
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({section:section})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
 
app.get("/sections/:id/books", async function(req, res){
    try {
        const sectionBooks = await Book.find({ sectionId: req.params.id }).lean().exec()
        const section = await Section.findById(req.params.id)
        res.status(200).json({books: sectionBooks, section: section});
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})
 
app.get("/sections/:id/authors/:Aid", async function(req, res){
    try {
        const sectionBooks = await Book.find({ sectionId: req.params.id,authorId:req.params.Aid }).lean().exec()
        const section = await Section.findById(req.params.id)  
        const author = await Author.findById(req.params.Aid)  
        // let BooksOfAuthorinASection = {};

        // sectionBooks.forEach(async book => { 
        //     if(book.authorId==req.params.Aid)
        //     BooksOfAuthorinASection[book._id] = book; 
        // })
        return  res.status(200).json({sectionBooks: sectionBooks,author:author, section: section});
    }
    catch (err) {
        return res.status(400).send(err.message) 
    }
       
})
 

 
const bookSchema = new mongoose.Schema({
 
    name: { type: String, required: true },
    body: { type: String, required: true },
    sectionId: {      
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required:true,
    },
    authorId: {      
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required:true,
    }
  
}, {
    versionKey: false,   
    timestamps: true   
});

//--------CRUD operations for books----------

const Book = mongoose.model("book", bookSchema);
 
app.post("/books",async function(req, res){
    try {
        
        const book = await Book.create(req.body)
        return res.status(201).send(book);
        
    }
    catch(err) {
        
        return res.status(400).send(err.message)
        
    }
    
})

app.get("/books", async function (req, res) {
    try {
        const book = await Book.find().lean().exec();
        
        return res.status(201).send(book)
        
    }
    catch(err) {
        
        return  res.status(400).send(err.message)
        
    }
    
})

 
app.get("/books/:id", async function (req, res) {
    try {
        const book = await Book.findById(req.params.id).lean().exec();
        return res.status(200).send(book)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
app.patch("/books/:id", async function (req, res) {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(book)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/books/:id", async function (req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({book:book})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
 

const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    bookId: [{   
        type:mongoose.Schema.Types.ObjectId,
        ref: "book",
        required:true,
    }]
    
}, {
    versionKey: false,   
    timestamps: true   
});


//--------CRUD operations for author----------
const Author = mongoose.model("author", authorSchema);  //posts by mongoose
app.post("/authors",async function(req, res){
    try {
        
        const author = await Author.create(req.body)
        return res.status(201).send(author);
        
    }
    catch(err) {
        
       return res.status(400).send(err.message)
        
    }

})

app.get("/authors", async function (req, res) {
    try {
        const author = await Author.find().lean().exec();
       
      return res.status(201).send(author)
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
    
})

app.get("/authors/:id", async function (req, res) {
    try {
        const author = await Author.findById(req.params.id).lean().exec();
        return res.status(200).send(author)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.patch("/authors/:id", async function (req, res) {
    try {
        const author = await Author(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(author)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/authors/:id", async function (req, res) {
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({author:author})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})
 
 
app.get("/authors/:id/books", async function (req, res) {
    const authorsBooks = await Book.find({ authorId: req.params.id }).lean().exec()
    const author = await Author.findById(req.params.id)
    let BooksOfAuthor = {};
    authorsBooks.forEach(async book => {
        const bookId = book._id;  
        BooksOfAuthor[bookId] = book; 
    })
    return res.status(200).json({ authorsBook: BooksOfAuthor, author: author })
})
  

const checkedOutSchema = new mongoose.Schema({  
    
}, {
    versionKey: false,   
    timestamps: true    
});

//--------CRUD operations for checkout----------
const Checkout = mongoose.model("checkout", checkedOutSchema);  //posts by mongoose
app.post("/checkouts",async function(req, res){
    try {
        
        const checkout = await Checkout.create(req.body)
        return res.status(201).send(checkout);
        
    }
    catch(err) {
       
       return res.status(400).send(err.message)
        
    }

})

app.get("/checkouts", async function (req, res) {   // boks that are checkedout
    try {
        const checkout = await Checkout.find().lean().exec();
       
      return res.status(201).send(checkout)
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
     
})

app.get("/notcheckouts", async function (req, res) {
    try {
        const checkout = await Checkout.find().lean().exec();
        const books = await Book.find().lean().exec()
    
        let uncheckedBooks = {};
        
        books.forEach(async bookObj => {
            var flag = 0;
            var bookid=bookObj._id
            checkout.forEach(async checkedBookObj => {
                if ( bookid== checkedBookObj.bookId)
                    flag = 1;
            })
            if(flag==0)
            uncheckedBooks[bookid] = bookObj; 
            
        })
        return res.status(200).json({ uncheckedBooks: uncheckedBooks})
        
    }
    catch(err) {
       
      return  res.status(400).send(err.message)
        
    }
     
})

app.get("/checkouts/:id", async function (req, res) {
    try {
        const checkout = await Checkout.findById(req.params.id).lean().exec();
        return res.status(200).send(checkout)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.patch("/checkouts/:id", async function (req, res) {
    try {
        const checkout = await Checkout(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(203).send(checkout)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

app.delete("/checkouts/:id", async function (req, res) {
    try {
        const checkout = await Checkout.findByIdAndDelete(req.params.id).lean()
        return res.status(205).json({checkout:checkout})
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

 
   

app.listen(3010, async () => {
    await connect();
    console.log("listening on port 3010");
})



 