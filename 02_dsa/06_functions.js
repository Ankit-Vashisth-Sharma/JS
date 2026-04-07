function sayMyname(){
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
}

sayMyname()

// function add(a,b){
//     console.log(a+b);
// }


function add(a,b){
    // console.log(a+b);
    return a+b
}

let res = add(12,32)
console.log(res);

function loginMessage(username = 'Sam'){ // default value is Sam
    if(!username){
        console.log("This is undefined please enter the username");
    }
    return `${username} just logged in`
}

console.log(loginMessage());

