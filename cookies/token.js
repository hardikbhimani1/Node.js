const express = require("express");
const app = express();

//middleware

const authorization = (req,res,next)=>{
    const allHeader = req.allHeader
    console.log(req.allHeader);
    if(allHeader.token === "hardik"){
        next();
    }else{
        res.send({"message":"unathorization user"});
    }
}

app.get("/demo",[authorization],(req,res)=>{
    if(req.query.uname === "hardik" && req.query.upwd === "bhimani"){
        res.send({
            login:"succes"
        })

    }else{
        res.send({
            login:"fail"
        })
    }
})

app.listen(5151,()=>{
    console.log("server listenning the port no 5151")
});