const mongoose = require("mongoose")
const mongoURI="ymongodb+srv://ShadabK:Shadab123@cluster0.v7yy0s3.mongodb.net/vnotebook?retryWrites=true&w=majorit"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then((res)=>{
        console.log("Connected To  Mongo Successfully")
    }).catch((error)=>{
        console.log('error encountered',error)
    });
       
    }

module.exports=connectToMongo;