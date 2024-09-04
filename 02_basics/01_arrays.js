// //JavaScript arrays are resizable and can contain a mix of different
// let myArr = [45,12,63,75]
// let heros = ["Batman","Superman","Flash","Wonder Woman"]
// let numbers = new Array(12,13,1,4,9,64)
// let myNewArr = [24,34,"Preetam",true,null]
// //JavaScript array-copy operations create shallow copies.(share same memory reference)
// console.log(myArr)
// console.log(heros)
// console.log(numbers)
// console.log(myNewArr)

// console.log(heros[0])//access array element

//array methods

let arr = [10, 11, 12, 13, 14, 15];

// arr.push(74) //add to last
// console.log(arr)

// arr.pop() //remove from last
// console.log(arr)

// arr.unshift(21) //add to first
// console.log(arr)

// arr.shift() //remove from first
// console.log(arr)

// console.log(arr.includes(4))
// console.log(arr.indexOf(4))

// let anotherArr = arr.join()
// console.log(arr);
// console.log(anotherArr);
// console.log(typeof anotherArr); //string

let newArr = [0, 1, 2, 3, 4, 5];
console.log("original", newArr);

console.log("slice result", newArr.slice(1, 4));
console.log("original", newArr);

console.log("splice result", newArr.splice(1, 4));
console.log("original", newArr);
let newArr1 = [0, 1, 2, 3, 4, 5];
console.log("splice result", newArr1.splice(1, 4, 6, 7));
console.log("original", newArr1);
// slice() is used for extracting a portion of an array without modifying it, 
//while splice() is used for adding or removing elements from an array, modifying it in place.
