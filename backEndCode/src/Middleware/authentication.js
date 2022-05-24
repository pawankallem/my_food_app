
require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{

            if(err) return reject(user);

            resolve(user);
            
        });
    });
};

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).send({
                message: "token not privided header"
            })
        }
        
        if (!req.headers.authorization.startsWith("Bearer ")) {
            return res.status(400).send({
                message: "token not privided not correct"
            })
        }
        
        // console.log(req.headers.authorization)
        const token=req.headers.authorization.split(" ")[1];

        let user=await verifyToken(token);
        // console.log(user.token)
        req.user=user.token;
        

    } catch (error) {
        return res.status(401).send( error );
    }

    return next();
}