let userName = ()=>{};

if(userName){
    console.log(`Got user name`)
}else {
    console.log(`not have user name`)
}

//Falsy values 
//  false, "", 0, -0, BigInt 0n, null, undefined
// Surprising trusty values 
// "false", 'false', '0', "0", "<space>", -1, [], {}, function (){}, ()=>{}

let arr = []

if(arr.length === 0){
    console.log(`Array is empty`)
}

let obj = {}

if(Object.keys(obj).length === 0){
    console.log(`Object is empty`)
}

// Nullish Coalescing Operator (??) : null ,  undefined

let num
// num = 5 ?? 10  //5
// num = null ?? 10 //10
// num = undefined ?? 10 //10
// num = null ?? 10 ?? 20 //10
// console.log(num)

//ternary operator
// condition ? true statement  : false statement
 
let price = 100
 price < 100 ? console.log("price less than 100") : console.log("price greater than 100") 