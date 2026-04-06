const accountID = 123456789;
let accountemail = "abc@gmail.com"
var accountpassword = "12345678"
accountCity = "New York"

console.log(accountID);
// accountID = 987654321; // This will throw an error because accountID is a constant
console.log(accountCity);

console.table([accountemail, accountpassword, accountCity]);
console.table({accountemail, accountpassword, accountCity});
