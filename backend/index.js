const express = require("express");
const cors = require("cors");
require('dotenv').config();
const userRouter = require("./routes/userRouter");
const  mongoose  = require("mongoose");
const app = express();
const port = 3000;


async function connectDb(){
       try{
          await mongoose.connect(process.env.MONGODB_URL);
          console.log("successfully connected to the db");
            app.listen(port,()=>{
                console.log(`app started listening on the port ${port}`);
            })
       }catch(err){
          console.log("failed to connect to db: ",err.message);
       }
}
connectDb();

app.use(cors(),express.json());
app.use("/user",userRouter);

