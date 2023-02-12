require('dotenv/config');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();
const morganMiddleware = require('./src/middleware/morganLogs');
const route = require('./src');

app.use(cors());
app.use(morganMiddleware);
// app.use('/api/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1', route);

module.exports = app;