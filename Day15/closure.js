// Activity 1
function outerFunction() {
    let outerVariable = "Hello, world!";

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}

const myInnerFunction = outerFunction();
console.log(myInnerFunction()); // Logs 'Hello, world!'

function createCounter() {
    let counter = 0; // Private variable

    return {
        increment: function () {
            counter += 1;
        },
        getValue: function () {
            return counter;
        },
    };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // Logs 2

myCounter.increment();
console.log(myCounter.getValue()); // Logs 3

// Activity 2
function createUniqueIdGenerator() {
    let lastId = 0; // Private variable to keep track of the last generated ID

    return {
        generate: function () {
            lastId += 1;
            return lastId;
        },
        getLastId: function () {
            return lastId;
        },
    };
}

const uniqueIdGenerator = createUniqueIdGenerator();

console.log(uniqueIdGenerator.generate()); // Logs 1
console.log(uniqueIdGenerator.generate()); // Logs 2
console.log(uniqueIdGenerator.getLastId()); // Logs 2
console.log(uniqueIdGenerator.generate()); // Logs 3
console.log(uniqueIdGenerator.getLastId()); // Logs 3

function greet() {
    let name = "Shivam";
    return function () {
        return `Hello! ${name}`;
    };
}

const name = greet();
console.log(name());
