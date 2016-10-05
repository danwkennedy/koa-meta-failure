'use strict';

module.exports = function *failureHandler(next) {
  try {
    yield next;
  } catch (err) {
    this.status = 500;

    if (err.status >= 500 && err.status < 600) {
      this.status = err.status;
    }

    let response = {
      title: err.message
    };

    if (err.source) {
      response.source = err.source.message;
    }

    this.body = response;
    this.app.emit('error', err, this);
  }
};
