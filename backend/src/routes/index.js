const express = require('express');
const { 
    sendEmail
    } = require('../controllers/index');
const router = express.Router();

router
    .route('/sendemail')
    .post(sendEmail);

module.exports = router;