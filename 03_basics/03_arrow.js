// let user = {
//     userName : "Soumya",
//     greet : function () {
//         // console.log(`${this.userName}, welcome to our website`)
//         console.log(this)
//     }
// }

// user.greet()
// user.userName = "Madan"
// user.greet()
// console.log(this) 
//in browser global object is windows 
//in our machine global object is empty object{}

// function chai() {
//     let name = "Monoj"
//     console.log(this)
//     console.log(this.name)
// }
// // chai()

// let chai = function () {
//     let name = "Monoj"
//     console.log(this)
//     console.log(this.name)
// }
// chai()

// let chai =  () => {
//     let name = "Monoj"
//     console.log(this)
//     console.log(this.name)
// }
// chai()

// () => {} //arrow function

// let func1 = (num1,num2) => {
//     return num1 + num2
// }

// let func = (num1,num2) => num1 + num2 //return sum
// let func2 = (num1,num2) => ( num1 + num2 )//return sum

// let myFunc = () => ({name : "Preetam",age : 25})//return obj

// console.log(myFunc())

// An IIFE is a JavaScript function that runs as soon as it is defined. 
// It's a way to create a private scope for variables and avoid polluting the global namespace.Avoid conflict with global variables

(function chai () {
    //named IIFE
    var rand = "Arun"
    console.log("Immediate Invoke Function Expression")
})(); // ; to end the function its very very imp to execute next IIFE

( (server) => {
        console.log(`DB Connect with ${server} `)
    }
)("Airtel_Wifi");