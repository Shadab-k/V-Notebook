const mongoose = require("mongoose")
const mongoURI="mongodb+srv://ShadabK:Shadab123@cluster0.v7yy0s3.mongodb.net/vnotebook?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then((res)=>{
        console.log("Connected To  Mongo Successfully")
    }).catch((error)=>{
        console.log('error encountered',error)
    });
       
    }

module.exports=connectToMongo;