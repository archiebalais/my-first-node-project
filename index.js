const myModule = require('./myModule');
const myOtherModule = require('./myOtherModule');

console.log('hello world');

function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Archie');
hello('Amber');

console.log(myModule.add(2, 2));
console.log(myModule.subtract(8, 2));
console.log(myModule.multiply(3, 3));

// my other module
myOtherModule.welcomeToNode()