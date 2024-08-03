// Activity 1
function msg(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, 2000);
    });
}
msg("After 2 seconds!!").then((message) => console.log(message));

function timeoutPromise(message, timeout = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, timeout);
    });
}

timeoutPromise("Promise timed out!", 2000)
    .then((message) => console.log(message)) // Won't be called
    .catch((error) => console.error(error.message));

// Activity 2
function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: `Fetched data from ${url}` };
            resolve(data);
        }, delay);
    });
}

const url1 = "https://api.example.com/data1";
const url2 = "https://api.example.com/data2";
const url3 = "https://api.example.com/data3";

fetchData(url1, 1000)
    .then((data) => {
        console.log("Data 1:", data);
        return fetchData(url2, 500);
    })
    .then((data) => {
        console.log("Data 2:", data);
        return fetchData(url3, 1500);
    })
    .then((data) => {
        console.log("Data 3:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Activity 3
async function waitForAndLog(promise) {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Error: ", error);
    }
}

const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 2000);
});

waitForAndLog(promise);

async function handleRejected(promise) {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Error: ", error);
    }
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejectrd"), 1000);
});

handleRejected(promise);
