'use strict';

module.exports = function *failureHandler(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    
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
