// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(message = 'I love typescript.', size = 'Large') {
    console.log(`Please confirm your order of a qoute "${message}" on a regular "${size}" size shirt.`);
}

make_shirt();

make_shirt('I love typescript.', 'Medium');

make_shirt('I love coding.', 'Small');