let tinderUser = new Object() //singleton obj
// let tinder1 = {} //multiton obj

tinderUser.id = "123abc"
tinderUser.name = "Gopu"
tinderUser.height = "175cm"
tinderUser.age = 26
// console.log(tinderUser)

let user = {
    email : "preetamdas248@gmail.com",
    userName : {
        fullName : {
            firstName : "Preetam",
            lastName : "Das"
        }
    }
}

// console.log(user.userName.fullName.firstName)

let obj1 = {
    1 : "a",
    2 :"b"
}
let obj2 = {
    1 : "a",
    2 :"b"
}

// let resultObj = Object.assign({}, obj1, obj2)  //(target, source, ..)
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
//Returns the target object.
// console.log(resultObj)
// console.log(resultObj == obj1)//false

let obj3 = {...obj1, ...obj2}
// console.log(obj3)

let myUser = [
    {
        email : "raj@gmail,com",
        age : 21,
    },
    {
        email : "raj@gmail,com",
        age : 21,
    },
    {
        email : "raj@gmail,com",
        age : 21,
    },
]

// console.log(myUser[1].email)

// console.log(Object.keys(tinderUser)) //return string
// console.log(Object.values(tinderUser)) //return string
// console.log(Object.entries(tinderUser)) //return string in string

// console.log(tinderUser.hasOwnProperty("height"))
// console.log(tinderUser.hasOwnProperty("password"))