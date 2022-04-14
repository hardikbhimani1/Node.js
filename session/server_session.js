const express = require("express")
const app = express();

//cookies- parser

const cookieParser = require("cookie-parser")
app.use(cookieParser());

const session = require("express-session");
app.use(session({secret:"hardikbhimani123", resave:true,saveUninitialized:true}))

app.get("/setthesession",(req,res)=>{
    req.session.uname = "hardik";
    req.session.upwd = "bhimani";
    res.send("session created....")
});

app.get("/getthesession",(req,res)=>{
    res.send(`Session uname : ${req.session.uname} and upwd ${req.session.upwd}`)
});

app.get("/deletethesession",(req,res)=>{
    req.session.destroy();
    res.send("Session delete...")

})

app.listen(5151,()=>{
    console.log("server is on port no 5151")
})