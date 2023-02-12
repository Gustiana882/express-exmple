/* eslint-disable class-methods-use-this */
const morgan = require('morgan');
const { Writable } = require('stream');
const Logger = require('../helpers/loger');

class MyStream extends Writable {
  write(msg) {
    Logger.http(msg); // text yang akan diisi
  }
}

// Build the morgan middleware
const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream: new MyStream(),
});

module.exports = morganMiddleware;
