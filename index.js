const express = require("express");
const module1 = require("./module1");

const app = express();


app.use("/m1",module1); 


let  port = process.env.PORT || 1235;
app.listen(port,()=>{
    console.log(`server listen port ${port}`);
});