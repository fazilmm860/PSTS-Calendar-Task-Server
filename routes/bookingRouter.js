const express = require('express');
const {postBooking,getBookings}=require('../contoller.js/controller')
const router = express.Router();

router.post('/book',postBooking );
router.get('/getbooking', getBookings);

module.exports = router;