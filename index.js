module.exports = async function failureHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;

    if (err.status >= 500 && err.status < 600) {
      ctx.response.status = err.status;
    }

    let response = {
      title: err.message
    };

    if (err.source) {
      response.source = err.source.message;
    }

    ctx.response.body = response;
    ctx.app.emit('error', err, this);
  }
};
