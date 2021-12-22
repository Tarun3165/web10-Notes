const multer = require("multer")
const path = require("path");

const storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null,path.join(__dirname,"../uploads"))
    },
    filename: function (res, file, cb) {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1E9);
            cb(null, uniquePrefix + "-" + file.originalname);
    }
})



function fileFilter(req, file, callback) {

  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg")
    {
        callback(null, true);
    }
    else
    {
        callback(null, false);
    } 
}

module.exports = multer({
  storage: storage,
  limits: {
    fieldSize:1024*1024*5   
  },
  
  fileFilter:fileFilter
   
})