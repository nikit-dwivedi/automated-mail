const express = require('express');
const { sendBirthdayMail } = require('../controller/mail.controller');
const router = express.Router();

router.get('/',sendBirthdayMail)


module.exports = router