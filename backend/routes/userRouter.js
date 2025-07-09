const express = require("express");
const router = express.Router();
const {userSignupSchema, userLoginSchema} = require("../zod-validation/userSchema");
const {userModel} = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/signup",async (req,res)=>{
      const response = userSignupSchema.safeParse(req.body);
      if(!response.success){
         return res.status(401).send({
             msg : "wrong credential format",
             error : response.error
         })
      }

      const {email,name,password} = req.body;

      try{

          const userEmailExist = await userModel.findOne({email});
          if(userEmailExist){
               return res.status(411).send({
                 msg : "email should be unique , this email already exist"
               })
          }

          const hashedPassword = await bcrypt.hash(password,10);
          if(!hashedPassword){
             throw new Error("issue with bcrypt, cannot create hashed password");
          }

          const newUser = await userModel.create({name,email,password:hashedPassword});
          if(!newUser){
             throw new Error("issue with mongodb cannot generate new user");
          }

          return res.send({
             msg : "user signed up successfully"
          })
      }catch(err){
         return res.status(500).send({
             msg : "issue with server: signup process failed",
             error : err.message
         })
      }

})

router.post("/login",async (req,res)=>{
     const response = userLoginSchema.safeParse(req.body);
     if(!response.success){
         return res.status(411).send({
             msg : "wrong credential format"
         })
     }

     const {email,password} = req.body;
     try{
         const emailExist = await userModel.findOne({email});
         if(!emailExist){
             return res.status(401).send({
                 msg : "invalid email or password"
             })
         }

         const checkPassword = await bcrypt.compare(password,emailExist.password);
         if(!checkPassword){
             return res.status(411).send({
                 msg : "invalid email or password"
             })
         }

         const token = jwt.sign({user_id : emailExist._id},process.env.USER_JWT_SECRET_KEY );

         return res.send({
             msg : "user login successfully",
             token
         })

     }catch(err){
         return res.status(500).send({
             msg : "server issue: login failed",
             error : err.message
         })
     }
})

module.exports = router;