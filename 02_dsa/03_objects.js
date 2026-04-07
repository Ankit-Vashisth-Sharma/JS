// singleton

// objects literal

const mySymbol = Symbol('mySymbol');

const person = {
    name: 'John',
    age: 30,
    [mySymbol]: 'This is a symbol property',
    isloggedIn: true,
    "full name": "John Doe",
    email: "abc@gmail.com",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person);
console.log(person.name); // John
console.log(person['name']); // John
console.log(person.age); // 30
console.log(person["age"]); // 30
console.log(person[mySymbol]); // This is a symbol property
person.greet(); // Hello, my name is John and I am 30 years old.
console.log(person["full name"]); // John Doe
console.log(person.email); // abc@gmail.com

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
const person1 = new Person('Alice', 25);
console.log(person1.name);
console.log(person1.age);
person1.greet(); // Hello, my name is Alice and I am 25 years old.

// class syntax
class PersonClass
{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person2 = new PersonClass('Bob', 35);
console.log(person2.name);
console.log(person2.age);
person2.greet(); // Hello, my name is Bob and I am 35 years old.

person.happyBirthday = function(){
    console.log(`Happy birthday ${this.name}! You are now ${this.age} years old.`);
}
console.log(person.happyBirthday());

