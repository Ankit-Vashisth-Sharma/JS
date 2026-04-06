const a1 = [1,2,3,4,5];
const a2 = [6,7,8,9,10];

// a1.push(a2);
// console.log(a1); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

const r = a1.concat(a2);
console.log(r); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

a1.push(a2);
console.log(a1); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

console.log(a1[5][1]); // 7

const all = [...a1, ...a2];
console.log(all); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10], 6, 7, 8, 9, 10]

const r1 = [1,2,3,[4,5,6,[7,8,9]]];

console.log(r1[3][3][1]); // 8

console.log(r1.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray(r1)); 

console.log(Array.isArray("Anything"));

console.log(Array.from("Anything")); // ["A", "n", "y", "t", "h", "i", "n", "g"]

let b1 = 100;
let b2 = 200;
let b3 = 300;

let arr = [b1, b2, b3];
console.log(arr); // [100, 200, 300]

console.log(Array.of(b1, b2, b3)); // [100, 200, 300]