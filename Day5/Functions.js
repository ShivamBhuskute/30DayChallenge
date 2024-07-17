// Activity 1
function evenOdd(num) {
    if (num % 2 == 0) return console.log("Even");
    return console.log("Odd");
}
evenOdd(5);

function sqrt(num) {
    return console.log(num * num);
}
sqrt(5);

// Activity 2
let max = function (x, y) {
    if (x < y) return console.log(y);
    return console.log(x);
};
max(5, 6);

let strcat = function (a, b) {
    return console.log(a + b);
};
strcat("do", "while");

// Activity 3
let sum = (a, b) => {
    return console.log(a + b);
};
sum(3, 4);

let val = (a) => {
    for (i = 0; i < a.length; i++) {
        if (a[i] == "a") return true;
    }
    return false;
};

console.log(val("dia"));

// Activity 4
function mul(a, b = 5) {
    return a * b;
}
console.log(mul(5));

function greet(name, age = 5) {
    return console.log(`hi! ${name}, ${age}, nice to meet you!!!`);
}
greet("greg");

// Activity 5
function repeat(fn, num) {
    return function () {
        for (let i = 0; i < num; i++) {
            fn();
        }
    };
}

const time = repeat(() => console.log("Hi"), 3);
time();

function applyFunctions(fn1, fn2, value) {
    const firstResult = fn1(value);
    const finalResult = fn2(firstResult);
    return finalResult;
}

// Example usage:
const addOne = (x) => x + 1;
const square = (x) => x * x;

const result = applyFunctions(addOne, square, 2); // (2 + 1)^2 = 9
console.log(result); // Output: 9
