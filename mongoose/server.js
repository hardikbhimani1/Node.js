const express = require("express");
//const cors = require(cors);
const mongoose = require("mongoose");
const data = require("./data") 
const user = require("./usermodel");

const app = express();
app.use(express.json());
// app.use (cars());

//connect to mongodb database

mongoose.connect(`mongodb://localhost:27017/hardik`,{
    UseNewUrlParser:true,
    UseUnifiedTopology:true

});

// app.get("/insert",(req,res)=>{
//     const result = user.insertMany(data.user);
//     res.send(result)
// });


// app.get("/user",(req,res)=>{
//     user.find().then((data)=>{
//             res.json(data)
//     })
// })

// app.get("/user",(req,res)=>{
//     user.find().select("name").then((data)=>{
//             res.json(data)
//     })
// })


app.get("/user",(req,res)=>{
    user.find(req.query).then((data)=>{
            res.json(data)
    })
})

//assign the port number

const port = process.env.PORT || 0986

app.listen(port,()=>{
    console.log(`server listening the port number${port}`);
});