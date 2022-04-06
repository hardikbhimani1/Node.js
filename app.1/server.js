const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const student = require("./mongoosedata")


const list = require('./mongoosedata');

app.get("/", (req, res) => {
    res.send("HELLO STUDENT")
})

app.get("/inquiry", (req, res) => {

    res.sendFile(__dirname + "/register.html")
})

// app.get("/register",(req,res)=>{
//     const studentdata = new student(req.query)
//     console.log("student data : ", studentdata)

//     studentdata.save(function (error) {
//         if (error) {
//             console.log("ERROR : ", error)
//         }
//         else {
//             res.send("Data successfully inserted")
//             console.log("Data inserted Successfully :)")
//         }
//     })
// })

app.post("/register", (req, res) => {
    const studentdata = new student(req.body)
    console.log("student data : ", studentdata)

    studentdata.save(function (error) {
        if (error) {
            console.log("ERROR : ", error)
        }
        else {
            res.send("Data successfully inserted")
            console.log("Data inserted Successfully :)")
        }
    })
})

// connect to mongoodb database
mongoose.connect("mongodb://localhost:27017/student", {
    useNewUrlparser: true,
})
    .then((result) => { console.log("connected success") })
    .catch((err) => { console.log("error", err) })

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('listening on port', port) });