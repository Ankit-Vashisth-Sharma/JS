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
// console.log(regularUser.email)
// console.log(regularUser.fullName.userfullName.firstName)
// console.log(regularUser.fullName.userfullName.lastName)
// console.log(regularUser.fullName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj5 = {5: "e", 6: "f"};

const obj3 = {obj1,obj2};
const obj4 = Object.assign(obj1,obj2)
const obj6 = Object.assign({},obj1,obj2,obj5)

// console.log(obj3)
// console.log(obj4)
// console.log(obj6)

const spdobj = {...obj1, ...obj2 , ...obj5, ...obj3, ...obj4, ...obj6}
console.log(spdobj);

console.log(obj1[2])
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
