// Activity 1
function fact(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fact(num - 1);
}
console.log(fact(5));

function fib(num) {
    if (num === 0 || num === 1) return 1;

    return fib(num - 1) + fib(num - 2);
}
console.log(fib(10));

// Activity 2
function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case: sum the first element and the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}
const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); // 15 if cpp, arr[n-1] + sumArray(arr, n-1);

function maxiEle(arr, n) {
    if (n === 1) {
        return arr[0];
    }
    const maxNum = maxiEle(arr, n - 1);

    return Math.max(arr[n - 1], maxNum);
}

const array = [1, 5, 3, 9, 2];
const n = array.length;
console.log(maxiEle(array, n));

// Activity 3
function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str === "" || str.length === 1) {
        return str;
    }
    // Recursive case: call the function with the substring excluding the first character
    // and add the first character to the end of the result
    return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString("shiv"));

function ifPal(i, s) {
    if (i > s.length / 2) return true;
    if (s[i] != s[s.length - i - 1]) return false;
    return ifPal(i + 1, s);
}
console.log(ifPal(0, "madam"));
