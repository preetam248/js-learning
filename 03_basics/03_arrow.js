let user = {
    userName : "Soumya",
    greet : function () {
        // console.log(`${this.userName}, welcome to our website`)
        console.log(this)
    }
}

// user.greet()
// user.userName = "Madan"
// user.greet()
// console.log(this) 
//in browser global object is windows 
//in our machine global object is empty object{}

function chai() {
    let name = "Monoj"
    console.log(this)
    console.log(this.name)
}
// chai()

let chai = function () {
    let name = "Monoj"
    console.log(this)
    console.log(this.name)
}
// chai()

let chai =  () => {
    let name = "Monoj"
    console.log(this)
    console.log(this.name)
}
// chai()

// () => {} //arrow function

let func1 = (num1,num2) => {
    return num1 + num2
}

let func = (num1,num2) => num1 + num2 