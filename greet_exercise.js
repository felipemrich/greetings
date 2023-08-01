// This function takes a name as input and returns a greeting message based on the input.
function greet(name) {
    // Check if the name is null (undefined or not provided)
    if (name == null) {
        return 'Hello there!'; // Return a generic greeting if the name is not provided.
    }

    // Check if the input is an array
    if  (Array.isArray(name)) {
        if (name.length === 2) {
            // If the array has exactly two elements, join them with a comma and return a specific greeting.
            return 'Hello, ' + name.join(", ");
        } else {
            // If the array has more or less than two elements, still join them with a comma and return a general greeting.
            return 'Hello, ' + name.join(", ");
        }
    }

    // Check if the name is all in uppercase
    if (name === name.toUpperCase()) {
        // If the name is all in uppercase, return a shout-out greeting.
        return 'HELLO ' + name + '!';
    }

    // If none of the above conditions are met, return a regular greeting with the provided name.
    return 'Hello, ' + name;
}

// Testing the greet function with different inputs and printing the results.
console.log(greet(['felipe', 'emrich'])); // Output: Hello, felipe, emrich
console.log(greet('felipe')); // Output: Hello, felipe
console.log(greet()); // Output: Hello there!
console.log(greet('FELIPE')); // Output: HELLO FELIPE!
