const express = require('express');

const route = express.Router();
const { auth } = require('./routes');

route.use('/', auth);

route.use('*', (req, res) => {
  res.status(404).json('page not found!');
});

module.exports = route;