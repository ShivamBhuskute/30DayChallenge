// Activity 1
books = {
    title: "man",
    author: "mani",
    year: 2016,

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },

    update(newYear) {
        this.year = newYear;
    },
};
console.log(books);

console.log(books.title, books.author);

// Activity 2
console.log(books.getDetails());

console.log(books.update(2019));
console.log(books);

// Activity 3
const library = {
    name: "City library",
    book: [
        {
            title: "to kill a mocking bird",
        },
        {
            title: 1984,
        },
        {
            title: "animal farm",
        },
    ],
};

console.log(library);
console.log(library.name);
library.book.forEach((books) => {
    console.log(books.title);
});

// activity 5
for (const prop in books) {
    if (books.hasOwnProperty(prop)) {
        console.log(`${prop}: ${books[prop]}`);
    }
}

Object.keys(books).forEach((key) => {
    console.log(`${key}`);
});
Object.values(books).forEach((value) => {
    console.log(value);
});
