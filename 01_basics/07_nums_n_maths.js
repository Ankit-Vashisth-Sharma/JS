const score = 400
console.log(score); // 400

const pi = 22/7;
console.log(pi); // 3.142857142857143

const balance = new Number(5600);
console.log(balance); // [Number: 5600]
console.log(balance.valueOf()); // 5600
// balance.valueOf() returns the primitive value of the Number object, which is 5600.

score.toString(); // "400"
pi.toFixed(20); // "3.14159265358979311600"
// toString() method converts a number to a string representation. So, score.toString() will return "400" and pi.toFixed(2) will return "3.14"

console.log(pi.toFixed(100)); 
console.log(score.toFixed(5));
// toFixed() method formats a number using fixed-point notation. It takes an argument that specifies the number of digits to appear after the decimal point. If the argument is greater than the number of digits in the number, it will add zeros to the end of the number. If the argument is less than the number of digits in the number, it will round the number to the specified number of digits. So, pi.toFixed(100) will return a string representation of pi with 100 digits after the decimal point, and score.toFixed(5) will return "400.00000".

let y = 123.123987
let x = 567.578901
console.log(y.toPrecision(6)); // "123.124"   
console.log(x.toPrecision(3)); // "568"   
// toPrecision() method formats a number to a specified length. It takes an argument that specifies the total number of digits to appear in the number, including both the integer and decimal parts. If the argument is greater than the number of digits in the number, it will add zeros to the end of the number. If the argument is less than the number of digits in the number, it will round the number to the specified number of digits. So, y.toPrecision(6) will return "123.124" and x.toPrecision(3) will return "568".

console.log(Number.isInteger(score)); // true
console.log(Number.isInteger(pi)); // false
// Number.isInteger() method determines whether the passed value is an integer. So, Number.isInteger(score) will return true because score is an integer, and Number.isInteger(pi) will return false because pi is not an integer.

let g = 100000000;
console.log(g.toLocaleString('en-IN')); // "100,000,000"
// toLocaleString() method converts a number to a string representation using the locale's conventions. So, g.toLocaleString() will return "1,..." with commas as thousand separators.


// ++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++

console.log("Maths");
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.round(567.51231)); // 568
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.8)); // 3
console.log(Math.abs(-5)); // 5
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.PI); // 3.141592653589793
console.log(Math.min(5, 10, 2, 8)); // 2
console.log(Math.max(5, 10, 2, 8)); // 10
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // random integer between 0 and 99
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

const min = 1;
const max = 100;

const randomInt = Math.floor(Math.random()* (max-min+1)) + min;
console.log(randomInt); // random integer between 1 and 100
// can 100 come? Yes, because Math.random() can return 0, but it cannot return 1. So, the maximum value of randomInt will be 100 when Math.random() returns 0.9999999999999999 (which is the largest possible value less than 1).
