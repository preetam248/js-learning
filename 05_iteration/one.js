// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// let arr = [12,52,32,48]
// arr.forEach(element => {
//     console.log(element)
// })

// let i = 0
// while(i<10){
//     console.log(i)
//     i++
// }

// let j = 10
// do{
//     console.log(j)
//     j--
// }while(j>0)


// ------------------------------------------*********************************--------------------------------------------------------
// let arr = [1,2,3,4,5,6,7]
// for (const ele of arr) {      //for of loop
//     console.log(ele)
// }

// let str = "Preetam"

// for(const ele of str){
//     console.log(ele)
// }

let myMap = new Map() //only unique value  //map
 myMap.set("In", "India")
 myMap.set("Pak","Pakisthan")
 myMap.set("Ban","Bangladesh")
 myMap.set("In", "India")
//  console.log(myMap)

// for(const key of myMap){
//     console.log(key)
// }

for(const [key,value] of myMap){
    // console.log(`${key} :- ${value}`)
}

let myObj = {
    game1 : "NFS",
    game2 : "Bgmi"
}
 
// for(const [key,value] of myObj){ // myObj is not iterable
//     console.log(`${key} :- ${value}`)
// }

for(const key in myObj){        //for in loop
    // console.log(myObj[key])
}

let lang = ["java", "python", "c++","javascript"]

for(const key in lang){
    // console.log(lang[key])
}

for(const key in myMap){ //no result coz map is not iterable
    console.log(key)
}
