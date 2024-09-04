// function sayMyName (myName) {
//     console.log(myName)
// }

// sayMyName("Rajoshree")

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// // addTwoNumbers(3,7)

// function multiply(num1, num2) {
//     return num1 * num2
// }

// let result = multiply(5,7)
// // console.log(result)

// function loginUserMsg(userName) {
//     if(userName === undefined){
//         console.log("enter user name")
//         return
//     }
//     return `${userName} just login`
// }

// console.log(loginUserMsg("hitesh"))

// function loginUserMsg(userName = "Sam") { //atleast = Sam
//     if(userName === undefined){
//         console.log("enter user name")
//         return
//     }
//     return `${userName} just login`
// }

// console.log(loginUserMsg())

function calculateCardPrice (...num) { //... rest operator
  return num; //return an array
}

// console.log(calculateCardPrice(100,200,300))

function calculateCardPrice (val, val2, ...num) { //... rest operator
    return num; //return an array
  }
  
//   console.log(calculateCardPrice(100,200,300,400))

  let obj = {
    name: "Preetam",
    age: 25
  }

  function handleObj(anyObj){
    console.log(`Name is ${anyObj.name} and age is ${anyObj.age}.`)
  }

// handleObj(obj)

const myArr = [201,23,7743,613,]

function handleArr(anyArr){
    return anyArr
}

console.log(handleArr(myArr))