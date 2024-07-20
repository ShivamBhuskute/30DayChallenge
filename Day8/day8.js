// Activity 1
age = 5;
let name = "san";
console.log(`age is : ${age}, name is: ${name}`);

console.log(`this is line 1
    this is line 2
    this is line 3`);

// Activity 2
const arr = [1, 2, 3];

const [first, second] = arr;
console.log(first);
console.log(second);

const books = {
    title: "man",
    author: "mani",
    year: 2016,
};
const { title, author, year } = books;
console.log(title);
console.log(author);

// Activity 3
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

function sum(...restArgs) {
    s = 0;
    for (let i of restArgs) {
        s += i;
    }
    return s;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Activity 4
function product(a, b = 5) {
    return a * b;
}
console.log(product(5));
console.log(product(5, 6));

// Activity 5

// variable declaration
var identification = "Tike";
var color = "Black";
var age = 7;

// function declaration
var bark = function () {
    console.log("Woof Woof!!");
};

// Using Object Literal Enhancement
// combines all variables into an anotherDog object
var anotherDog = { identification, color, age, bark };
anotherDog.bark();
console.log(anotherDog);

const key = "name";
const value = "Atta";

// Using computed property names
const user = { [key]: value };
console.log(user.name); // Atta
