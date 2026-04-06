let num = "33a";
let num2 = "33";
let num3 = null;
let num4 = undefined;
let num5 = "   33   ";
let num6 = "33.14";
let num7 = true;
let num8 = false;

console.log(typeof num); // string

let convertedNum = Number(num);
console.log(typeof convertedNum);
console.log(convertedNum); // NaN

let convertedNum2 = Number(num2);
console.log(typeof convertedNum2);
console.log(convertedNum2); // 33

console.log(Number(num3)); // 0
console.log(Number(num4)); // NaN
console.log(Number(num5)); // 33
console.log(Number(num6)); // 33.14
console.log(Number(num7)); // 1
console.log(Number(num8)); // 0

let num9 = 1;
let convertedNum9 = Boolean(num9);
console.log(convertedNum9);

let var1 = "123+12";
console.log(var1);
let convertedVar1 = eval(var1);
console.log(convertedVar1); // 135

let var2 = Number(var1);
console.log(var2); // NaN

let var3 = 11;
let negVar3 = -var3;
console.log(negVar3); // -11

let var4 = "Hello";
let var5 = " World";
let var6 = var4 + var5;
console.log(var6);

console.log("1"+2); // "12"
console.log("1"-2); // -1
console.log("1"*2); // 2
console.log("1"/2); // 0.5
console.log(1+1+"1"); // "21"
console.log(1+"1"+1); // "111"

console.log(Boolean("")); // false
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(true)
console.log(+true); // 1
console.log(+false); // 0

let gameCounter = 1;
gameCounter++;
console.log(gameCounter); // 2


let score = 10;
++score;
console.log(score); // 11

