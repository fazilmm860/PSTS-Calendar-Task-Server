// const express = require('express');
// const Booking = require('../models/bookingSchema');

// const recruiters = ['Ramesh', 'Mathew', 'Robert', 'Dony', 'Xavier']; // Corrected spelling of Xavier

// // const postBooking = async (req, res) => {
// //   try {
// //     const { name, mobile, email, selectedSlot } = req.body;

// //     const existingBooking = await Booking.findOne({ selectedSlot });
// //     if (existingBooking) {
// //       return res.status(400).json({ error: 'Slot already booked' });
// //     }

// //     let assignedRecruiter;
// //     const busyRecruiters = await Booking.countDocuments({ selectedSlot });
// //     if (busyRecruiters >= recruiters.length) {
// //       assignedRecruiter = "BC";
// //     } else {
// //       assignedRecruiter = recruiters[busyRecruiters % recruiters.length];
// //     }

// //     const newBooking = new Booking({
// //       name,
// //       mobile,
// //       email,
// //       selectedSlot: new Date(selectedSlot),
// //       assignedRecruiter
// //     });

// //     await newBooking.save();
// //     res.status(200).json({ message: 'Booking successful' });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // }

// // const postBooking = async (req, res) => {
// //   try {
// //     const { name, mobile, email, selectedSlot } = req.body;

// //     const existingBooking = await Booking.findOne({ selectedSlot });
// //     if (existingBooking) {
// //       return res.status(400).json({ error: 'Slot already booked' });
// //     }

// //     // Find bookings for 9 am slot
// //     const bookingsAt9Am = await Booking.find({
// //       selectedSlot: {
// //         $gte: new Date(selectedSlot).setHours(0, 0, 0, 0),
// //         $lt: new Date(selectedSlot).setHours(24, 0, 0, 0)
// //       }
// //     });

// //     let assignedRecruiter;

// //     if (bookingsAt9Am.length < recruiters.length) {
// //       // If there are available recruiters for the 9 am slot
// //       assignedRecruiter = recruiters[bookingsAt9Am.length];
// //     } else {
// //       // If all recruiters are busy, assign "BC"
// //       assignedRecruiter = "BC";
// //     }

// //     const newBooking = new Booking({
// //       name,
// //       mobile,
// //       email,
// //       selectedSlot: new Date(selectedSlot),
// //       assignedRecruiter
// //     });

// //     await newBooking.save();
// //     res.status(200).json({ message: 'Booking successful', assignedRecruiter });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // }


// const getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json({ bookings });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: `Internal Server Error` });
//   }
// }

// module.exports = { postBooking, getBookings };


