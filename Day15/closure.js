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

// Avtivity 3
const functionArray = [];

for (let i = 0; i < 5; i++) {
    functionArray[i] = (function (index) {
        return function () {
            console.log(index);
        };
    })(i); //IIFE
}

// Testing the functions
functionArray[0](); // Logs 0
functionArray[1](); // Logs 1
functionArray[2](); // Logs 2
functionArray[3](); // Logs 3
functionArray[4](); // Logs 4

// Using async
// const functionArray = [];

// for (let i = 0; i < 5; i++) {
//     functionArray[i] = (function (index) {
//         return async function () {
//             console.log(index);
//         };
//     })(i);
// }

// // Testing the functions
// (async function testFunctions() {
//     await functionArray[0](); // Logs 0
//     await functionArray[1](); // Logs 1
//     await functionArray[2](); // Logs 2
//     await functionArray[3](); // Logs 3
//     await functionArray[4](); // Logs 4
// })();

// Activity 4
const itemManager = (() => {
    // Private collection of items
    let items = [];

    // Add an item to the collection
    const addItem = (item) => {
        items.push(item);
    };

    // Remove an item from the collection
    const removeItem = (item) => {
        items = items.filter((i) => i !== item);
    };

    // List all items in the collection
    const listItems = () => {
        return items;
    };

    // Return the public methods
    return {
        addItem,
        removeItem,
        listItems,
    };
})();

// Usage example
itemManager.addItem("Apple");
itemManager.addItem("Banana");
console.log(itemManager.listItems()); // ['Apple', 'Banana']
itemManager.removeItem("Apple");
console.log(itemManager.listItems()); // ['Banana']

// Activity 5
function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Example usage:
function slowFunction(num) {
    // Simulate a slow function with a heavy computation
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(100000)); // Computes and returns result
console.log(memoizedSlowFunction(100000)); // Returns cached result

function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(6)); // 720
console.log(memoizedFactorial(5)); // 120, retrieved from cache
console.log(memoizedFactorial(7)); // 5040

