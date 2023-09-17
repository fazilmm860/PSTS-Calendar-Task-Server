require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const loginRouter = require("./routes/router");
const bookingRouter=require("./routes/bookingRouter")
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = process.env.PORT;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors({
    origin: 'http://localhost:3000', // Add your frontend URL here
    credentials: true
  }));
app.use('/api',loginRouter);
app.use('/api',bookingRouter);

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})