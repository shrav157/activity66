const express = require('express')
const mongoose=require('mongoose')
const routes=require('./routes/routes')
// const app = express()
const dotenv=require('dotenv')
dotenv.config();
const port =process.env.PORT
const app=express()
app.use(express.json())
mongoose.connect(process.env.URI).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
app.use("/", routes)
app.listen(port)