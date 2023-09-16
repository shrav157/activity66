const { log } = require('console')
const express = require('express')
const mongoose= require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
let port=process.env.PORT
mongoose.connect(process.env.URI).then(()=>{console.log('mongodb connected..');}).catch((err)=>{console.log(err)})
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/Shrav_db').then(()=>{console.log('Mongodb Connected....');}).catch((error)=>{console.log(error);})
var conn = mongoose.connection;
app.get('/',function(req,res){
    const fdata ={"name":"Shravya","age":20}
    conn.collection("users").insertOne(fdata,(err,result)=>{
        if(err)
        {
            console.log(err);
        }else
        {
            console.log("inserted");
            res.status(202).send("Mongodb Connected..")
        }
    });
})

app.get('/display',function(req,res)
{
    conn.collection("users").find({}).toArray().then((result)=>{
        if(result.length==0){
            res.send({status:0,message:"No data Found"});
        }else{
            res.send({status:1,message:result});
        }
        
    })
})
app.get('/update',function(req,res){
    conn.collection('users').updateOne({"name":"Shravya"}, {$set:{"name":"Sejal"}}, function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.status(202).send("data updated....");
        }
    });
})
app.get('/delete',function(req,res){
    var conn=mongoose.connection
    var dlr={"name": "Sejal"}
    conn.collection("users").deleteOne(dlr, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('deleted');
            res.status(202).send("success");
        }
    });
})

app.listen(4000)