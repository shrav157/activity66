const express=require('express')

const studentController =require('../controllers/studentController')
const router=express.Router()
router.post("/student", studentController.createStudent)
module.exports=router
