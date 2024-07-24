import { CustomError } from "./CustomError.mjs";
// Activity 1
function throwError() {
    try {
        // Intentionally throw an error
        throw new Error("This is an intentional error!");
    } catch (error) {
        // Handle the error
        console.error("Caught an error:", error.message);
    }
}

// Call the function
throwError();

function divide(a, b) {
    try {
        // Check if the denominator is zero
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        // Perform the division
        const result = a / b;
        return result;
    } catch (error) {
        console.error("ERR: ", error.message);
    }
}
divide(2, 0);

// Activity 2
function divides(a, b) {
    try {
        // Check if the denominator is zero
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        // Perform the division
        const result = a / b;
        console.log(result);
    } catch (error) {
        console.error("ERR: ", error.message);
    } finally {
        console.log("No error");
    }
}
divides(10, 5);

// Activity 3
function test(age) {
    try {
        if (age == null) {
            // Checks for both null and undefined
            throw new CustomError("PROVIDE A VALUE");
        } else {
            console.log(age);
        }
    } catch (error) {
        // throw new CustomError()
        console.error(error.message); // Outputs: PROVIDE A VALUE
    }
}

test(); // This will trigger the error
test(25); // This will print 25

function ifStr(str) {
    try {
        if (str == "") {
            throw new CustomError("ERR: IT IS AN EMPTY STRING");
        } else {
            console.log(str);
        }
    } catch (error) {
        console.error(error.message);
    }
}
ifStr("WHY");
ifStr("");

// Activity 4
