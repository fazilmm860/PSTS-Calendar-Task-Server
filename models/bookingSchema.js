const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
name: { 
    type: String, 
    required: true 
},
mobile: {
     type: String, 
     required: true
},
email: {
     type: String,
      required: true 
},
recruiter:{
      type:String,
      required:true,
},
date:{
      type:Date,
      required:true
},
startTime:{
      type:Number,
      required:true
},
endTime:{
      type:Number,
      required:true
}

}
);

const Booking = mongoose.model('BookingSchema', bookingSchema);

module.exports = Booking;