const mongoose = require("mongoose")
const mongoURI="mongodb+srv://ShadabK:Shadab@123@cluster0.v7yy0s3.mongodb.net/?retryWrites=true&w=majority/vnotebook"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then((res)=>{
        console.log("Connected To  Mongo Successfully")
    }).catch((error)=>{
        console.log('error encountered',error)
    });
       
    }

module.exports=connectToMongo;