const name = "Joker";
const repoCount = 42;

// string concatenation
const combinedString = name + " has " + repoCount + " repositories.";
console.log(combinedString);

// string interpolation
const interpolatedString = `${name} has ${repoCount} repositories.`;
console.log(interpolatedString);

const multiLineString = `This is a multi-line
string that spans
multiple lines.`;
console.log(multiLineString);

const a = "Ankit ";
const b = "Sharma";

console.log(`${a}${b}`);

const gameName = "Chess";
console.log(gameName.length);

let str = "Hello, World!";

const game = new String(str);
console.log(game.toUpperCase());

const gameDesc = new String("Chess is a strategic board game.");
console.log(gameDesc.toLowerCase());
console.log(gameDesc.includes("strategic")); // true
console.log(gameDesc.startsWith("Chess"));
console.log(gameDesc.endsWith("game."));
console.log(gameDesc.indexOf("board")); // 21
console.log(gameDesc.slice(0, 5)); // "Chess"
console.log(gameDesc.replace("Chess", "Checkers")); // "Checkers is a strategic board game."
console.log(gameDesc[2]); // "Chess is a strategic board game." (original string remains unchanged)
console.log(gameDesc.__proto__.toLowerCase); // String.prototype
// String.prototype is an object that contains methods and properties that are available to all string instances in JavaScript. When you create a string, it inherits these methods and properties from String.prototype, allowing you to perform various operations on strings, such as converting to uppercase, checking for substrings, slicing, and more.
console.log(gameDesc.charAt(6)); // "i"
console.log(gameDesc.substring(5,17)); // "is a strategic"
console.log(gameDesc.slice(-21,-1)); // "strategic board game"

let foo = "   Trim Whitespace!   ";
console.log(foo.trim()); // "Trim Whitespace!"

foo.replace("Trim", "Remove"); // "   Remove Whitespace!   " (original string remains unchanged)
console.log(foo); // "   Trim Whitespace!   " (original string remains unchanged)
foo = foo.replace("Trim", "Remove");
console.log(foo); // "   Remove Whitespace!   " (original string is updated)

let str2 = "Interstaller is the best movie ever!";
console.log(str2.split(" ")); // ["Interstaller", "is", "the", "best", "movie", "ever!"]
