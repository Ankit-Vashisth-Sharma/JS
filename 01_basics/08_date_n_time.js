// Date and Time in JavaScript
// Creating a Date object
const now = new Date();
console.log(now.toString()); // current date and time

console.log(now.getFullYear()); // current year
console.log(now.getMonth()+1); // current month (0-11, so we add 1)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.toLocaleDateString()); // current date in local format
console.log(now.toLocaleTimeString()); // current time in local format
console.log(now.toISOString()); // current date and time in ISO format

// Creating a Date object with specific date and time
const specificDate = new Date(2026, 0, 1,3,4,5); // January 1, 2026, 3:04:05 AM
console.log(specificDate.toString());
console.log(specificDate.toLocaleString()); // specific date and time in local format
console.log(now.toJSON()); // current date and time in JSON format

let date1 = new Date("2022-01-23"); // January 1, 2022 

console.log(date1.toString());
console.log(date1.toLocaleString());

let timestamp = Date.now(); // current timestamp in milliseconds
console.log(timestamp);

let tmp2 = new Date(timestamp);
console.log(tmp2.toLocaleString()); // convert timestamp to Date object and format it

let myCreatedDate = new Date(2022, 0, 1); // January 1, 2022
console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.getTime()); // timestamp in milliseconds for January 1, 2022

console.log(Date.now() - myCreatedDate.getTime()); // time difference in milliseconds between January 1, 2022 and now

console.log((Date.now() - myCreatedDate.getTime()) / (1000 * 60 * 60 * 24)); // time difference in days between January 1, 2022 and now

console.log(Date.now()/1000); // current timestamp in seconds

console.log(myCreatedDate.toLocaleString("en-IN", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
}
)); // "Saturday, January 1, 2022"

console.log(tmp2.toLocaleString("en-IN", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric",

}
)); 

console.log(tmp2.toLocaleString("en-IN", {
    era : "long",
    weekday: "long",
}
)); 