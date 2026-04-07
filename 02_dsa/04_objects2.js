// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "001"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "any@gmail.com",
    fullName : {
        userfullName:{
            firstName: "Ankit",
            lastName: "Sharma"
        }
    }
}
console.log(regularUser.email)
console.log(regularUser.fullName.userfullName.firstName)
console.log(regularUser.fullName.userfullName.lastName)
console.log(regularUser.fullName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1,obj2};
const obj4 = Object.assign(obj1,obj2)

console.log(obj3)
console.log(obj4)

