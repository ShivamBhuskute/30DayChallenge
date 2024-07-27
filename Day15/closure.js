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

