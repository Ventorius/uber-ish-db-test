const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test'){
    mongoose.connect('mongodb://localhost/uber-ish');
}


app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {



});

module.exports = app;