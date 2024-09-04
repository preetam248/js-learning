//singleton
// Object.create()

//object literals

let mySym = Symbol("key1") //creation of symbol

let userObj = {
    name : "Preetam",
    age : 25,
    email : "preetamdas248@gmail.com",
    isLogedIn : true,
    logInDay : ["Monday","Wednesday"],
    "city name" : "Serampore",
    [mySym] : "Hello", //way to define symbol in obj
}

// console.log(userObj)
// console.log(userObj.email)
// console.log(userObj["age"])
// console.log(userObj["city name"])
// console.log(userObj[mySym]) //way to access value of symbol in obj
// console.log(userObj);

// userObj.age = 26
// console.log(userObj)
// Object.freeze(userObj)// to freeze obj value can't change 
// userObj.age = 39
// console.log(userObj);

userObj.greeting = function  () {
    console.log("Hello world")
}
userObj.greetingTwo = function  () {
    console.log(`Hello world, ${this.name}`) //string interpolation 
}

console.log(userObj.greeting())
console.log(userObj.greetingTwo())

console.log(userObj);



