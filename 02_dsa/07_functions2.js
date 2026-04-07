function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,12,123,44))

const user = {
    username: "Ankit",
    price: 299
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObj(user)

handleObj({
    username:"Sam",
    price:999
})

const arr = [100,200,300,400]

function secondNumber (getArr){
    return getArr[1]
}

// console.log(secondNumber(arr))

console.log(secondNumber([78,34,123,54,34,11,233]))