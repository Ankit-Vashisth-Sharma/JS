//stack and heap memory in js
//stack memory is used for static memory allocation and the execution of code, while heap memory is used for dynamic memory allocation and storing objects and data structures.

//stack memory example
function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(add(2,312)); // 15

//heap memory example
let person = {
    name: "Alice",
    age: 25
};
console.log(person.name); // "Alice"

let person2 = person; // person2 is a reference to the same object in heap memory
person2.age = 30;

console.log(person.age); // 30, because person and person2 reference the same object in heap memory

//stack memory example with primitive types
let x = 10;
let y = x; // y is a copy of the value of x
y = 20;
console.log(x); // 10, because x is unchanged
console.log(y); // 20, because y is updated
