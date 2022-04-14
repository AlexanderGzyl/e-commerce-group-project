'use strict';
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const route = require('./routes/routes');
const cookieParser = require("cookie-parser");
const Auth = require('./auth')


//constants
const PORT = 4000;
const mongoURI = process.env.MONGO_URI


express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  
  app.use(express.json())
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }))
  app.use('/', express.static(__dirname + '/'))
  // initialize express-session 
  app.use(Auth)
  app.use(route)

    // connect initially while catching errors
  try {
    mongoose.connect(mongoURI).then(()=> {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  })
  } catch (error) {
    console.log('fail to connect', error)
  }