const a = "31"
let b = 2;
console.log(a + b); // "33"

console.log(b++ + +a);

console.log(typeof +a)

console.log(+a+12)

console.log("11"== 11); // true
console.log("11"=== 11); // false
/*
The reason for this is that the `==` operator performs type coercion, which means it converts the operands to the same type before making the comparison. In this case, when you compare the string "11" with the number 11 using `==`, JavaScript converts the string "11" to the number 11, and then compares them, resulting in `true`.

On the other hand, the `===` operator is a strict equality operator that does not perform type coercion. It checks both the value and the type of the operands. Since "11" is a string and 11 is a number, they are of different types, and therefore `===` returns `false`.
*/

console.log("2">1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null == undefined); // true
/*
The behavior of `null` in comparisons can be a bit confusing. Here's how it works:
- `null > 0`: This returns `false` because `null` is not greater than any number.
- `null == 0`: This returns `false` because `null` is only equal to `undefined` and not to any other value, including `0`.
- `null >= 0`: This returns `true` because when comparing `null` with a number using the greater than or equal to operator, JavaScript treats `null` as `0`. Therefore, it evaluates as `0 >= 0`, which is `true`.
- `null < 0`: This returns `false` because when comparing `null` with a number using the less than operator, JavaScript treats `null` as `0`. Therefore, it evaluates as `0 < 0`, which is `false`.
- `null <= 0`: This returns `true` for the same reason as above, as it evaluates as `0 <= 0`, which is `true`.
- `null == undefined`: This returns `true` because both `null` and `undefined` are considered equal in non-strict equality comparisons, even though they are of different types.
*/
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false
console.log(undefined == null); // true
/*
The behavior of `undefined` in comparisons is as follows:
- `undefined > 0`: This returns `false` because `undefined` is not greater than any number.
- `undefined == 0`: This returns `false` because `undefined` is only equal to `null` and not to any other value, including `0`.
- `undefined >= 0`: This returns `false` because when comparing `undefined` with a number using the greater than or equal to operator, JavaScript treats `undefined` as `NaN`, and any comparison with `NaN` returns `false`.
- `undefined < 0`: This returns `false` for the same reason as above, since `undefined` is treated as `NaN`.
- `undefined <= 0`: This also returns `false` for the same reason, as `undefined` is treated as `NaN`.
- `undefined == null`: This returns `true` because both `undefined` and `null` are considered equal in non-strict equality comparisons, even though they are of different types.
*/  

// === Strict equality operator
// == Loose equality operator

console.log(0 == false); // true
console.log(0 === false); // false
/*
In JavaScript, the `==` operator performs type coercion, which means it converts the operands to the same type before making the comparison. When you compare `0` with `false` using `==`, JavaScript converts `false` to `0`, and then compares them, resulting in `true`. 
On the other hand, the `===` operator is a strict equality operator that does not perform type coercion. It checks both the value and the type of the operands. Since `0` is a number and `false` is a boolean, they are of different types, and therefore `===` returns `false`.
*/

console.log("" == false); // true
console.log("" === false); // false
/*
Similar to the previous example, when you compare an empty string `""` with `false` using the `==` operator, JavaScript performs type coercion. It converts `false` to an empty string `""`, and then compares them, resulting in `true`. 
However, when you use the `===` operator, it checks both the value and the type. Since `""` is a string and `false` is a boolean, they are of different types, and therefore `===` returns `false`.
*/  
console.log("2"==2); // true
console.log("2"===2); // false
/*In this case, when you compare the string `"2"` with the number `2` using the `==` operator, JavaScript performs type coercion. It converts the string `"2"` to the number `2`, and then compares them, resulting in `true`. 
However, when you use the `===` operator, it checks both the value and the type. Since `"2"` is a string and `2` is a number, they are of different types, and therefore `===` returns `false`.
*/

console.log(~-1); // 0
/*
The `~` operator is the bitwise NOT operator in JavaScript. It inverts the bits of its operand. When you apply `~` to `-1`, it first converts `-1` to its binary representation, which is all 1s in two's complement form. In a 32-bit system, `-1` is represented as `11111111 11111111 11111111 11111111`. When you apply the `~` operator to this value, it inverts all the bits, resulting in `00000000 00000000 00000000 00000000`, which is `0` in decimal.
*/

console.log(~0); // -1
/*
When you apply the `~` operator to `0`, it first converts `0` to its binary representation, which is `00000000 00000000 00000000 00000000`. When you apply the `~` operator to this value, it inverts all the bits, resulting in `11111111 11111111 11111111 11111111`, which is `-1` in decimal.
*/

console.log(~1); // -2
/*
When you apply the `~` operator to `1`, it first converts `1` to its binary representation, which is `00000000 00000000 00000000 00000001`. When you apply the `~` operator to this value, it inverts all the bits, resulting in `11111111 11111111 11111111 11111110`, which is `-2` in decimal.
*/

console.log(~-4); // 3
/*
When you apply the `~` operator to `-4`, it first converts `-4` to its binary representation, which is `11111111 11111111 11111111 11111100` in two's complement form. When you apply the `~` operator to this value, it inverts all the bits, resulting in `00000000 00000000 00000000 00000011`, which is `3` in decimal.
*/

console.log(~-5); // 4
/*
When you apply the `~` operator to `-5`, it first converts `-5` to its binary representation, which is `11111111 11111111 11111111 11111011` in two's complement form. When you apply the `~` operator to this value, it inverts all the bits, resulting in `00000000 00000000 00000000 00000100`, which is `4` in decimal.
*/

console.log(~true); // -2
/*
When you apply the `~` operator to `true`, JavaScript first converts `true` to the number `1`. Then, it applies the `~` operator to `1`, which results in `-2` as explained in the previous example.
*/
console.log(~false); // -1
/*
When you apply the `~` operator to `false`, JavaScript first converts `false` to the number `0`. Then, it applies the `~` operator to `0`, which results in `-1` as explained in the previous example.
*/
const v = -4
console.log(~~~v); // 3
/*When you apply the `~` operator three times to `v`, which is `-4`, it works as follows:
1. The first `~` converts `-4` to its binary representation and inverts the bits, resulting in `3`.
2. The second `~` takes the result from the first step (which is `3`) and inverts its bits, resulting in `-4`.
3. The third `~` takes the result from the second step (which is `-4`) and inverts its bits again, resulting in `3`.    
*/

console.log(~~~~~~~~~~~v==3);
/*When you apply the `~` operator multiple times to `v`, which is `-4`, it alternates between `3` and `-4` with each application. Since you are applying it an odd number of times (11 times), the final result will be `3`. Therefore, the expression `~~~~~~~~~~~v == 3` evaluates to `true`.
*/

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id == id2); // false
console.log(id===id2); // false

/*
In JavaScript, `Symbol` is a primitive data type that represents a unique identifier. When you create a `Symbol` using `Symbol("123")`, it generates a new unique symbol each time, even if the description is the same. Therefore, `id` and `id2` are two different symbols, and when you compare them using `==`, it returns `false` because they are not the same symbol.
*/

const bigN = 1234567890123456789012345678901234567890n;
console.log(bigN);
console.log(typeof bigN); // "bigint"
/*
In JavaScript, `BigInt` is a built-in object that provides a way to represent whole numbers larger than `2^53 - 1`, which is the largest number that can be safely represented as a `Number` in JavaScript. When you create a `BigInt` by appending `n` to the end of an integer literal, it allows you to work with arbitrarily large integers without losing precision. The `typeof` operator returns `"bigint"` for values of type `BigInt`.
*/

const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1 == arr2);
console.log(arr1 === arr2);
/*
In JavaScript, arrays are reference types, which means that when you create an array, it is stored in memory as an object. When you compare two arrays using `==` or `===`, you are comparing their references (memory addresses) rather than their contents. Since `arr1` and `arr2` are two different arrays (even though they have the same contents), they occupy different memory locations. Therefore, both `arr1 == arr2` and `arr1 === arr2` will return `false`.
*/

let Obj = {
    name: "John",
    age: 30
}

console.log(arr1);

const fun = function(){
    console.log("This is inside the function");
}

console.log(fun());
/*
In JavaScript, functions are also objects, and when you define a function, it is stored in memory as a reference. When you log the function `fun`, it will display the function's code or its reference in the console, depending on the environment. The output will indicate that it is a function and may show its name or its definition.
*/

fun(); // This will call the function and execute its code, printing "This is inside the function" to the console.