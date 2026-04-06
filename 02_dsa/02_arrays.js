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
