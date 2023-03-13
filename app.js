const express = require("express");
const db = require("./db")
db.connectDatabase()
const app = express();
const port = 5000;
var cors = require("cors");
const { connectDatabase } = require("./db");
const Student = require("./Schema/Student");
app.use(cors())
app.use(express.json());

app.get('/', async (req,res)=>{
    const d = await st1.save();
    console.log(d);  
    res.send('hello buddy')
})
app.use()

app.listen(port, () => {
  console.log("Backend Start:✨✨✨");
  console.log("URL: http://localhost:5000/");
});
