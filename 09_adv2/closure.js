function outer() {
    let known = "preetam";

    function inner() {
        console.log(known); //access outer value
    }

    return inner; //return inner func
}

let myFunc = outer();  //not return only inner func its also return its lexical scope
myFunc();

// closure real world scenario

