const express=require("express");
const authentication=require("../Middleware/authentication");
const User=require("../Models/userModels")


const router=express.Router();

router.get("",authentication,async(req,res)=>{
    try {

        // console.log("user",req.user);
        return res.send({api:"https://fakestoreapi.com/products",message:"user verified!",user:req.user})
        
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports=router;