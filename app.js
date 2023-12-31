//----------import dependencies-------------------------------
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//----------import files--------------------------------------
const { success, badRequest } = require('./src/helper/response_helper')
const version1Index = require("./src/index");


//----------use dependencies----------------------------------
//use morgan
app.use(morgan('dev'));
// use cors
app.use(cors());
//image path
app.use('/static', express.static('template'))
//body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//----------redirect routes-----------------------------------
app.use('/v1', version1Index);


//----------for invalid requests start -----------------------


app.all('*', async (req, res) => {
    await badRequest(res, 'Invalid URL');
});
module.exports = app;
