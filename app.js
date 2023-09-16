const express=require("express");
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
const cookieParser=require("cookie-parser")

dotenv.config()

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`Sever Started`);
});