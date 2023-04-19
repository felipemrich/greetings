var utils  = require('greet-exercise');
var greet = utils.load('./greet_exercise.js', 'greet.html');

describe('test greet()', function() {
  it('should be called', function () {
    expect(greet('João')).toBeCalled();
  });
});