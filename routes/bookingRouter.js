const express = require('express');
const moment = require('moment');
const Booking=require('../models/bookingSchema')


const router = express.Router();


router.get('/available/:date', (req, res) => {
    const date = moment(req.params.date, 'YYYY-MM-DD');
    const startOfDay = date.startOf('day').toDate();
    const endOfDay = date.endOf('day').toDate();

    Booking.find({
        date: { $gte: startOfDay, $lte: endOfDay }
    }, (err, bookings) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            const bookedSlots = bookings.map(booking => ({
                startTime: booking.startTime,
                endTime: booking.endTime
            }));

            const allSlots = Array.from({ length: 24 }, (_, i) => i);

            const availableSlots = allSlots.filter(slot => {
                const slotStart = moment(date).add(slot, 'hours');
                const slotEnd = moment(date).add(slot + 1, 'hours');

                return !bookedSlots.some(bookedSlot => {
                    return (
                        (slotStart.isSameOrAfter(bookedSlot.startTime) && slotStart.isBefore(bookedSlot.endTime)) ||
                        (slotEnd.isSameOrAfter(bookedSlot.startTime) && slotEnd.isBefore(bookedSlot.endTime))
                    );
                });
            });

            res.json({ availableSlots });
        }
    });
});

// Endpoint to create a booking
router.post('/book', (req, res) => {
    const { recruiter, date, startTime, endTime, name, mobile, email } = req.body;

    // Check if there is already a booking with the same startTime and recruiter
    Booking.findOne({
        recruiter,
        date,
        startTime
    }, (err, existingBooking) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (existingBooking) {
            if (existingBooking.recruiter === recruiter) {
                res.status(400).json({ error: 'Slot not available for this recruiter at this time.' });
            } else {
                const booking = new Booking({
                    name,
                    mobile,
                    email,
                    recruiter,
                    date,
                    startTime,
                    endTime
                });

                booking.save((err, savedBooking) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                    } else {
                        res.json(savedBooking);
                    }
                });
            }
        } else {
            const booking = new Booking({
                name,
                mobile,
                email,
                recruiter,
                date,
                startTime,
                endTime
            });

            booking.save((err, savedBooking) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json(savedBooking);
                }
            });
        }
    });
});

router.get('/getbooking', (req, res) => {
    Booking.find({}, (err, bookings) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ bookings });
        }
    });
});


module.exports = router;
