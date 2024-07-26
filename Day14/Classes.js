// Activity 1
class Person {
    name = "Alice";
    age = 24;

    greet() {
        return `Hello ${this.name}, ${this.age}!!`;
    }
    updatedAge(age) {
        this.age = age;
        return `Ner age is ${age}`
    }
} 

const person1 = new Person();
console.log(person1.greet()); 
console.log(person1.updatedAge(20)); 
