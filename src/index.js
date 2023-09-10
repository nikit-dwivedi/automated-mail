const express = require("express");
const router = express.Router();

require("./config/mongodb")();

const mailRoute = require('./routes/mail.route.js')

router.use("/mail", mailRoute);

module.exports = router;