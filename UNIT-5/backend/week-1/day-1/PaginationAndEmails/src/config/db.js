require("dotenv").config();


const mongoose = require("mongoose");
const connect = () => {
    const dbUrl=process.env.NODE_ENV=="development" ?" mongodb://127.0.0.1:27017/web10Pagination":""
    return mongoose.connect(dbUrl)
};

module.exports = connect;
