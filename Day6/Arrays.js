// Activity 1
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0], arr[arr.length - 1]);

// Acivity 2
arr.push(1);
console.log(arr);

arr.pop();
console.log(arr);

var a = arr.shift();
console.log(arr);
console.log(a);

let val = arr.unshift(8);
console.log(val);
console.log(arr);

// Activity 3
const b = arr.map((n) => n * n);
console.log(b);

const c = arr.filter((num) => num % 2 == 0);
console.log(c);

const d = arr.reduce((acc, currVal) => acc + currVal);
console.log(d);

// Activity 4
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

arr.forEach((element) => {
    console.log(element);
});

// Activity 5
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(matrix);

console.log(matrix[0][0]);
