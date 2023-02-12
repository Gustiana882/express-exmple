const express = require('express');

const route = express.Router();
const auth = require('../controllers/controller.auth');

route.get('/', auth.login);
route.get('/sendmail', auth.email);
route.get('/data', auth.getUser);

module.exports = route;