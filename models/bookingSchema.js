// bookingSchema.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  selectedSlot: { type: Date, required: true },
  assignedRecruiter: { type: String, required: true },
}, { timestamps: true });

const Booking = mongoose.model('BookingSchema', bookingSchema);

module.exports = Booking;