let score = 53

console.log(typeof score)
console.log(typeof(score)) // same as above

score = "53"

console.log(typeof score)

let valueInNumber = Number(score) //convert string to a number
console.log(typeof valueInNumber)
console.log(valueInNumber)

let val = "30abc"
let changeInNumber = Number(val) //convert string(which has more than number chararcter) to a number
console.log(typeof changeInNumber) 
console.log(changeInNumber); //convert into NaN(Not a Number)

let a = null
console.log(a);
let modA = Number(a) //change null value to 0
console.log(typeof modA)
console.log(modA); 


let b = undefined
console.log(b);
let modB = Number(b) //change undefined value to NaN
console.log(typeof modB)
console.log(modB);

let c = false
console.log(b);
let modC = Number(c) //change true value to 1 and false 0
console.log(typeof modC)
console.log(modC);

let d = "Preetam"
console.log(d);
let modD = Number(d) //change alpthabet string to NaN
console.log(typeof modD)
console.log(modD);


let isTure = 0 //0 false, any other num (-/+) true. Empty sting "" false other sting true
let booleanIsTrue = Boolean(isTure) //Num->Boolean
console.log(booleanIsTrue)

let someNum = 53 //Num->String
let stringNum = String(someNum)
console.log(typeof stringNum)
console.log(stringNum)
