// Importing the 'greet-exercise' module and assigning it to the variable 'utils'
var utils = require('greet-exercise');

// Loading the 'greet_exercise.js' file and 'greet.html' file using the 'load' function from the 'utils' module
// The 'greet_exercise.js' file likely contains the implementation of the 'greet' function we want to test.
var greet = utils.load('./greet_exercise.js', 'greet.html');

// Starting a test suite using 'describe'
describe('test greet()', function() {
  // Defining a test case using 'it'
  it('should be called', function () {
    // Expecting that the 'greet' function is called with the argument 'João'
    // This test case is checking if the 'greet' function is callable with the provided argument.
    expect(greet('João')).toBeCalled();
  });
});
