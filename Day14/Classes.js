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

    static genericGreet() {
        return "Hello!!!!";
    }
}

const person1 = new Person();
console.log(person1.greet());
console.log(person1.updatedAge(20));

// Activity 2
class Student extends Person {
    studentId = 111;
    static totalStudents = 0;
    whatId() {
        return `ID of the student is ${this.studentId}`;
    }
    greet() {
        super.greet();
        return `hi! ${this.studentId}, ${this.name}, ${this.age}!!`;
    }
    constructor() {
        super();
        Student.totalStudents++;
    }
}

const student1 = new Student();
console.log(student1.studentId);
console.log(student1.greet());

// Activity 3
console.log(Person.genericGreet());
const student2 = new Student();
const student3 = new Student();
console.log(Student.totalStudents);