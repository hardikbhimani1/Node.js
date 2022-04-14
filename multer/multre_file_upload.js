const express = require("express");
var multer = require("multer");

const app = express();

var fileStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.filename + '-' + Date.now() + file.originalname);
    }
})

var upload = multer({storage:fileStorage})

app.post("/profile",upload.single("image"),(req,res)=>{
    console.log(req.file);
    res.json({"msg":"File upload"})
})
app.listen(5151);
console.log("Server listening the port no 5151")