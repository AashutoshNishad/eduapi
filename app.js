const express = require("express");
const db = require("./db")
db.connectDatabase()
const app = express();
const port = 5000;
var cors = require("cors");
const { connectDatabase } = require("./db");
const Student = require("./Schema/Student");
const auth = require("./Routes/auth")
app.use(cors())
app.use(express.json());

app.use("/auth" , require("./Routes/auth") )
app.use("/student" , require("./Routes/Curd") )
app.use("/teacher" , require("./Routes/curd-student") )
app.get('/', async (req,res)=>{
    // const d = await st1.save();
    // console.log(d);  
    res.send('hello buddy')
})

app.listen(port, () => {
  console.log("Backend Start:✨✨✨");
  console.log("URL: http://localhost:5000/");
});
