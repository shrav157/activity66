const mongoose =require('mongoose')
const studentSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
        },
        age:{
            type:Number,
            trim:true,
        },
        email:{
            type:String,
        },
        isDeleted:{
            type:Boolean,default:false,
        }
    },{timestamps:true}
)
module.exports=mongoose.model("NEWMVC", studentSchema) //collection name