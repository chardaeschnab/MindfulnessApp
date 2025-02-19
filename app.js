var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 


var videosRouter = require('./routes/videos');
var commentsRouter = require('./routes/comments');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/videos', videosRouter);
app.use('/api/comments', commentsRouter);

module.exports = app;
