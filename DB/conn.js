const mongoose = require("mongoose");

const conn=async()=>{
try {
    const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
console.log('MongoDB Connected');
} catch (error) {
    console.log(`Error from Catch block: ${error}`);
}
}
module.exports=conn