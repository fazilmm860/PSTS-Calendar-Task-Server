const express=require('express')
const Booking = require('../models/bookingSchema');


const postBooking = async (req, res) => {
  try {
      const { name, mobile, email, selectedSlot, assignedRecruiter } = req.body;

      const existingBooking = await Booking.findOne({ selectedSlot });
      if (existingBooking) {
          return res.status(400).json({ error: 'Slot already booked' });
      }

      const busyRecruiters = await Booking.find({ selectedSlot, assignedRecruiter });
      if (busyRecruiters.length >= 5) {
          return res.status(400).json({ error: 'All recruiters are busy at this time' });
      }

      const newBooking = new Booking({
          name,
          mobile,
          email,
          selectedSlot,
          assignedRecruiter
      });

      await newBooking.save();
      res.status(200).json({ message: 'Booking successful' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}



const getBookings=async(req,res)=>{
  try{
    const bookings=await Booking.find();
    res.status(200).json({bookings})
  }
  catch(error){
   console.error(error);

   res.status(500).json({error:`Internal Server Error`})
  }
}

  module.exports={postBooking,getBookings}