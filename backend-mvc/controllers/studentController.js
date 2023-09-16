const studentModel=require('../model/studentmodel')
const createStudent=async (req,res)=>{
    try{
        let data=req.body
        if(Object.keys(data)==0){
            return res.status(400).send({status:false,msg:"no data provide"})
        }
        let saveData=await studentModel.create(data)
        return res.status(201).send({status:true,msg:"succes"})

    }catch(err){
        console.log(err)
        return res.status(500).send({msg:"error"})
    }
}
module.exports={createStudent}