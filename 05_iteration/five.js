//reduce function to add element of array

let nums = [21,78,63,40,59]

// let total = nums.reduce(function (acc, cuuVal) {
//     console.log(`accumulator ${acc}, current value ${cuuVal}`)
//     return acc + cuuVal
// },0)/
let total = nums.reduce( (acc, cuuVal) => acc + cuuVal,0)

// console.log(total)

let shoppingCart = [
    {
        courseName : "JavaScript",
        price : 2999,
    },
    {
        courseName : "java",
        price : 1500,
    },
    {
        courseName : "python",
        price : 8999,
    },
]

let totalPrice = shoppingCart.reduce((acc,currVal)=>(acc + currVal.price),0)
console.log(totalPrice)