/*
// ---------------Conversion----------------
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
*/

//************* Operations ***************

let value = 45
let negValue = -(value)
// console.log(negValue)
// console.log(5**2) //act as  5 power 2

// let str1 = "Preetam"
// let str2 = " Das"
// console.log(str1+str2)

// console.log("1"+2)
// console.log(1+"3")
// console.log("1"+"4")
// console.log("1"+2+2) //after string all value concatenate as string
// console.log(1+2+"2") //before string val calcutale then concatenate to string
// console.log(1+2+"2"+3+4)

// let n = 1+2+"2"+3+4
// console.log(typeof n) //string

// console.log(true) //true
// console.log(true+) //not valid syntax
// console.log(+true)  //1
// console.log(3+true) //4

// console.log(typeof (1+"")) //string

// console.log(typeof ""); //string

// let num1, num2, num3
// num1 = num2 = num3 = 2+2
// console.log(num1+num2+num3)

// let n = 100
// console.log(n++);
// console.log(n);
// console.log(++n);


