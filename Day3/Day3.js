num = 5;
if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
}

// Activity 2
(a = 5), (b = 6), (c = 7);
if (a > b && a > c) {
    console.log("a");
} else if (b > a && b > c) {
    console.log("b");
} else {
    console.log("c");
}

// Activity 3
day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Sunday");
        break;
}

score = 75;
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80 && score < 90:
        console.log("B");
        break;
    case score >= 70 && score < 80:
        console.log("C");
        break;
    case score >= 60 && score < 70:
        console.log("D");
        break;

    default:
        console.log("Fail");
        break;
}
