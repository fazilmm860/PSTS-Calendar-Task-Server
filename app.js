const express=require("express");
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
const cookieParser=require("cookie-parser")
const connection=require("./DB/conn");
dotenv.config()

const port=process.env.PORT
connection();
app.listen(port,()=>{
    console.log(`Sever Started`);
});