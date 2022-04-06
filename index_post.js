var express = require("express");
var app = express();

app.listen(2345,()=>{
    console.log("server listining the port no:1234")
})

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended : true}))
app.use(bodyparser.json());
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index_post_login.html");
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    if(req.body.uname == 'hardik' && req.body.upwd == 'bhimani'){
        res.send("login success");
    }
    else{
        res.send("login Failed")
    }
});

// fall back function

app.use("/",(req,res)=>{
    res.send("no page")
})