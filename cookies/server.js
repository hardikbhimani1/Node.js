const express = require("express")
const cookiepaser = require("cookie-parser");
const { cookie, set } = require("express/lib/response");

const app = express();
app.use(cookiepaser());


app.get("/setthecookies",(req,res)=>{
    res.cookie("sub_one","reactjs");
    res.cookie("sub_two","nodejs")
    res.cookie("sub_three","mongodb");
    res.send({" MGS ": "cookie are set"});
});

app.get("/getthecookies",(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get("/deletethecookies",(req,res)=>{
    res.clearCookie("sub_one")
    res.send("Cookies delete...")
});
app.listen(5151,()=>{
    console.log("server is run port n 5151")
})