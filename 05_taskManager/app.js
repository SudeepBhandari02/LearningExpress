const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use('/api/v1/tasks', taskRoutes);

app.use(errorHandler);

module.exports = app;