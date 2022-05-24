const express=require("express");
const cors=require("cors");
const connect = require("./Config/db");
require("dotenv").config();
const userController=require('./Controllers/UserControllers');
const authController=require("./Controllers/AuthController");

const app=express();
app.use(express.json());
app.use(cors());

const port=process.env.PORT ||5555;

app.use("/user",userController);
app.use("/auth",authController);

app.listen(port,async(req,res)=>{
    try{
        await connect();
        console.log(`listening to port ${port}`)
    }catch(err){
        console.log(err)
    }
})