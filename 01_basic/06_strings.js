let name = "Preetam"
let repoCount = 10

console.log(name+" "+repoCount+" unit") //backdated string concatenation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`) //modern way 

let person = "Soubhik"
let age = 23

console.log(`My friend ${person},his age is ${age}.`) //string interpolation

let gameName = new String("Needforspeed")
// let newStr = gameName.toLocaleUpperCase()
// console.log(newStr)
// console.log(person.length)
// console.log(gameName.length)

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("s")) //case sensitive
// console.log(gameName.substring(4,7))
// console.log(gameName.endsWith("ee"))
// console.log(gameName.indexOf("ee",4))
// console.log(gameName.lastIndexOf("e",4))

console.log(gameName.slice(-5)) // o/p=> speed
console.log(gameName.slice(-8,-1)) //negative indexing from -1 from backward, o/p=>forspeed

console.log(gameName.includes("for"))

// console.log(gameName.replace("for","of"))

console.log(gameName.split("e"));


