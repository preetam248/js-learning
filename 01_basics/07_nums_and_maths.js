//--------------------Number----------------------

// let score = 100
// console.log(score);

// let balance = new Number(400)
// console.log(balance);
// // console.log(balance.toString());
// // console.log(balance.toString().length);
// console.log(balance.toFixed(2))
// console.log(typeof (balance.toFixed(2)))

// let num = 23.485
// console.log(num.toPrecision(3)) //use to make round of value, argument denote number of digit shuld precise

// let hundred = 100000
// console.log(hundred.toLocaleString("en-IN"))

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

// --------------------Math---------------------
// console.log(Math.abs(-18))
// console.log(Math.round(4.2))
// console.log(Math.round(4.6))
// console.log(Math.floor(4.6)) //o/p=>4
// console.log(Math.ceil(4.2)) //o/p=>5

// console.log(Math.random()) //The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1,
// console.log(Math.random() * 10) //range 0-9
// console.log(Math.floor((Math.random() * 10) + 1)) // range 1-10

let min = 10
let max = 20
// console.log(Math.floor(Math.random() * (max-min+1) + min)) //include both min and max value
console.log(Math.floor(Math.random() * (max-min) + min)) //include min and exclude max value


