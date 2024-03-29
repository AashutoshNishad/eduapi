const mongoose = require("mongoose");
require("dotenv").config();

// console.log({data: process.env.USERID , VO: process.env.PASSWORD });

// const mongoUrl = "mongodb://localhost:27017/pw"
const mongoUrl = `mongodb+srv://${process.env.USERID}:${process.env.PASSWORD}@cluster0.evexpkx.mongodb.net/?retryWrites=true&w=majority`

module.exports.connectDatabase = ()=>{
    mongoose
    .connect(mongoUrl)
    .then((con)=>{
        console.log(`Database Connected : ${con.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}