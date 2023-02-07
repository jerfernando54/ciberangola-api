const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const postRouters = require('./routes/post');
const authorRouters = require('./routes/author');

const { error404Handler, errorHandler } = require('./middleware');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', postRouters);
app.use('/v1', authorRouters);

app.use(error404Handler);
app.use(errorHandler);


module.exports = app;
