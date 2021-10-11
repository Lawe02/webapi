'use strict'

const express = require('express');
const router = require ('./routes');
const app = express();
const port = 8020;
const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port);

console.log('Server up and running, listning on port' + port);
