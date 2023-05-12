const express = require('express');
const citiesRoutes = require('./routes/cities');

const app = express();


app.use("/city", citiesRoutes);

module.exports = app;
