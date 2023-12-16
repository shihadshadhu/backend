const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://SHIHAD:desuza@cluster0.4r2a5xr.mongodb.net/database1?retryWrites=true&w=majority")
.then(()=>{console.log("DB CONNECTED")})
.catch(err=>console.log(err));



const studentschema=new mongoose.Schema({
    Admno:Number,
     Name:String,
     Age:Number,
    Course:String,
    image1:{
        data:Buffer,
        contentType:String
    }
     });


var studentmodel=mongoose.model("studentdetails",studentschema)
module.exports=studentmodel;

