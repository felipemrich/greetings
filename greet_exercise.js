function greet(name) {
    if (name == null) {
        return 'Hello there!';
    }

    if  (Array.isArray(name)) {
        if (name.length === 2) {
            return 'Hello, ' + name.join(", ");
        }
        else {
            return 'Hello, ' + name.join(", ");
        }
    }

    if (name === name.toUpperCase()) {
        return 'HELLO ' + name + '!';
    }

    return 'Hello, ' + name;
}


console.log(greet(['felipe', 'emrich']));
console.log(greet('felipe'));
console.log(greet());
console.log(greet('FELIPE'));