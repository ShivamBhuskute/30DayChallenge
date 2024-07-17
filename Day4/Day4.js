// Activity 1
for (i = 1; i <= 10; i++) {
    console.log(i);
}

for (let index = 1; index <= 10; index++) {
    console.log(`5 * ${index} = ${5 * index}`);
}

// Activity 2
let j = 1,
    sum = 0;
while (j <= 10) {
    sum += j;
    j++;
}
console.log(sum);

// Activity 3
j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

(a3 = 5), (f = 1);
do {
    f = f * a3;
    a3--;
} while (a3 >= 1);
console.log(f);

// Activity 4
for (let k = 1; k <= 5; k++) {
    let row = "";
    for (let l = 1; l <= k; l++) {
        row += "*";
    }
    console.log(row);
}

// Activity 5
for (it = 1; it <= 10; it++) {
    if (it == 5) continue;
    console.log(it);
}

for (it = 1; it <= 10; it++) {
    if (it == 7) break;
    console.log(it);
}
