//In JavaScript, var, let, and const are keywords used to declare variables.
var c = 300
if(true){
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a) //no access outside scope
// console.log(b) //no access outside scope
// console.log(c) // access outside scope ,that why we should not use var 

function one() {
    let userName = "Bittu"
    function two() {
        let userAge = 24
        console.log(userName)
    }
    // console(userAge)
    two()
}
// one()
//--------------------Interesting-------------------

addOne(5) //here we can call

function addOne(num) {
    return num + 1
}

// addTwo(6) //Cannot access 'addTwo' before initialization

let addTwo = function(num){
    return num + 2
} 
