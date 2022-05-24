
const express = require ("express");
const User=require("../Models/userModels")
const {body,validationResult} = require("express-validator")
const jwt=require("jsonwebtoken")

const router=express.Router();

const newToken=(token)=>{
    return jwt.sign({token},process.env.SECRET_KEY);
}

router.post("/register",
    body("email").isEmail().withMessage("Email required"),
    body("password").notEmpty().withMessage("password required"),
    async(req,res)=>{
    try {
        // console.log("inside registter")
        const err=validationResult(req);
        if(!err.isEmpty()){
            return res.send(err.array())
        }
        let user=await User.findOne({email:req.body.email});

        if(user){
            return res.send("email already taken!")
        }
        user=await User.create(req.body);

        const token=newToken(user);

        return res.status(201).send({message:"User Succesfully created !"})
        
    } catch (error) {
        console.log('error:', error)
        
    }
})

router.post("/login",
    body("email").isEmail().withMessage("Email required"),
    body("password").notEmpty().withMessage("password required"),
    async(req,res)=>{
    try {

        const err=validationResult(req);
        if(!err.isEmpty()){
            return res.send(err.array())
        }
        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.send("check Your email and password")
        }
        const match=user.checkPassword(req.body.password);
            if(!match){
                return res.send("check Your email and password");
            }
        const token=newToken(user);
        return res.send({token,message:"Login Successfull ! "})
        
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports=router;