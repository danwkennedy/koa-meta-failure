'use strict';

var chai = require('chai');
var assert = chai.assert;
var failure = require('..');

function getMiddleware(context, arg) {
  return failure.apply(context, [arg]);
}

describe('koa-meta-failure', function describeSuccess() {

  it('does nothing if no error', function checkNothing() {
    let context = {};

    let generator = getMiddleware(context);

    generator.next();
    generator.next();

    assert.deepEqual(context, {});
  });
});
