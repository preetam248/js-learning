/*
Types of data in JS
 Based on how they are store and how they are retrive or manipulate 

1. Primitive Datatype : 7 types
Ex: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

2. Non-Primitive / Reference Datatypes : 3 types
Ex: Array, Objects, Functions
*/

let id = Symbol("123")
let anotherId = Symbol("1230")
console.log(typeof id);
let number = 87462154654986159233n //BigInt

let heros = ["Spiderman", "Thor", "Ironman"]

let myObj = {
    person : "Preetam",
    age : 25,
    roll : 45,
}
console.log(typeof myObj);
console.log(heros);
console.log(typeof heros);


let myFunc = function(){
    console.log("Hello World")
}

console.log(typeof myFunc);

/* Premitive Datatypes

               Type                                   typeof

i)             Number                                 number
ii)            String                                 string
iii)           Boolean                                boolean
iv)            Bigint                                 bigint
v)             Symbol                                 symbol
vi)            Null                                   object
vii)           Undefined                              undefined


* Non-Premitive OR Referance OR Object datatype

                 Type                                  typeof

i)               Object                                object
ii)              Array                                 object
iii)             Function                              function(object)

*/