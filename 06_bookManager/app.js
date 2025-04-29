const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require("./middlewares/errorHandler");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(bookRoutes);


app.use('/api/v1/books',bookRoutes);

app.use(errorHandler);

module.exports = app;