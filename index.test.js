const failure = require('.');

function getMiddleware(context, arg) {
  return failure.apply(context, [arg]);
}

describe('koa-meta-failure', function describeSuccess() {

  test('does nothing if no error', async function checkNothing() {
    let context = {
      request: {},
      response: {}
    };

    await failure(context, () => {});

    expect(context.response).toEqual({});
  });
});
