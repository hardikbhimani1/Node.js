var mongoose = require("mongoose")
var EmpSchema = new mongoose.Schema({_id:Number, eno:Number, ename:String, esal:Number, eadd:String}, {versionKey : false})

var EmpModel = mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost/hardik");
var newEmp = new EmpModel({"_id":1, "eno":101, "ename":"hardik", "esal":4000, "eadd":"surat"})
newEmp.save(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Data Successfully Inserted in Database Hardik.");
    }
    mongoose.disconnect();
})