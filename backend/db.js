const mongoose = require("mongoose")
const mongoURI="mongodb://127.0.0.1/vnotebook"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
        console.log("Connected To  Mongo Successfully")
    }

module.exports=connectToMongo;