// Activity 1
class Person {
    name = "Alice";
    age = 24;

    greet() {
        return `Hello ${this.name}, ${this.age}!!`;
    }
    updatedAge(age) {
        this.age = age;
        return `Her age is ${age}`;
    }
}

const person1 = new Person();
console.log(person1.greet());
console.log(person1.updatedAge(20));

// Activity 2
class Student extends Person {
    studentId = 111;
    whatId() {
        return `ID of the student is ${this.studentId}`;
    }
    greet() {
        super.greet();
        return `hi! ${this.studentId}, ${this.name}, ${this.age}!!`;
    }
}

const student1 = new Student();
console.log(student1.studentId);
console.log(student1.greet());
