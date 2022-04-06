const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    "name":{type:String,required:true},
    "password":{type:String,required:true},
    "isAdmin":{type:Boolean,required:true},
    "email":{type:String,required:true}
},{timestamps:true});

const user = mongoose.model("user",userschema);
module.exports=user;