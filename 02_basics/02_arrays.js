let marvel_heros = ["Thor","Captain America","Black Panther","Ironman","Spiderman"]
let dc_heros = ["Batman","Superman","Flash","Wonder Woman","Aquaman"]

// marvel_heros.push(dc_heros) //here mh take dh as an one ele of arr, modify existing arr

// console.log(marvel_heros)
// console.log(marvel_heros[5])
// console.log(marvel_heros[5][1])

// let all_heros = marvel_heros.concat(dc_heros) //return a new arr
// console.log(all_heros)

// let all_new_heros = [...marvel_heros,...dc_heros] //spread operation ,act same as cocate but more otp on than 2 arr(advantage)
// console.log(all_new_heros);

// let arr = [1,2,3,[64,49],4,5,[78,21,[102,147]]]

// let my_new_arr = arr.flat(2)
// console.log(my_new_arr);

// console.log(Array.isArray("Preetam")) //false
// console.log(Array.isArray("Preetam","Bittu")) //false
// console.log(Array.from("Preetam")) // convt into a arr
// console.log(Array.of("Preetam","Bittu")) // convt into a arr of ele
console.log(Array.from({name:"Preetam"}))

let n1 = 121
let n2 = 159
let n3 = 142

console.log(Array.of(n1,n2,n3))