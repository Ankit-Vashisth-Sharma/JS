const a1 = [1,2,3,4,5];
const a2 = [6,7,8,9,10];

a1.push(a2);
console.log(a1); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

a1.concat(a2);
console.log(a1); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]