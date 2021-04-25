const express = require("express");
require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require('./routes/index');

mongoose.Promise = global.Promise;
try{
	mongoose.connect(process.env.DB_URL, { 
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});
}catch(e){
	console.error(e)
}

const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/', routes);

module.exports = app;