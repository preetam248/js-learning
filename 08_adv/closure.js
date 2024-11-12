//* closures are function return its all lexical scope

function outer() {
    let count = 4;

    function inner() {
        count++;
        return count;
    }

    return inner;
}

let increment = outer();  //return fn defination

console.log(increment());
console.log(increment());