const myArr = [1, 2, 3, 4, 5, "Strings", true, false, null, undefined, [1, 2], {name: "John"}];
console.log(myArr); 

console.log(myArr[0]); // 1
console.log(myArr[5]); // "Strings"
console.log(myArr[10]); // [1, 2]
console.log(myArr.length); // 11

myArr.push(12);
console.log(myArr);

const myArr3 = ['A', 'B', 'C', 'D', 'E'];
myArr3.unshift('Z');
console.log(myArr3);
/* unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. So, myArr3.unshift('Z') will add 'Z' to the beginning of the array and return the new length of the array, which is 6. shift() method removes the first element from an array and returns that removed element. So, myArr3.shift() will remove 'A' from the beginning of the array and return 'A'. After this operation, myArr3 will be ['B', 'C', 'D', 'E']. */
myArr3.shift();
console.log(myArr3);
console.log(myArr3.includes('C')); // true
console.log(myArr3.includes('Z')); // false

console.log(myArr3.join("-")); // "B-C-D-E"
console.log(myArr3.toString()); // "B,C,D,E"

const arr2 = [1,2,3,4,5];

arr2.forEach((num) => {
    console.log(num * 2); // 2, 4, 6, 8, 10
});

console.log(arr2);

const newarr = arr2.join();
console.log(newarr); 

// slice, splice

console.log("A ", arr2);

const mynarr1 = arr2.slice(1, 4);
console.log("B ", mynarr1);
console.log(arr2)
const mynarr2 = arr2.splice(1, 4);
console.log(arr2)
console.log("C ", mynarr2);

/* slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. So, arr2.slice(1, 4) will return a new array [2, 3, 4] and arr2 will remain unchanged as [1, 2, 3, 4, 5].

splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. So, arr2.splice(1, 4) will remove 4 elements starting from index 1 (which are 2, 3, 4, and 5) and return them as a new array [2, 3, 4, 5]. After this operation, arr2 will be modified to [1]. */ 
