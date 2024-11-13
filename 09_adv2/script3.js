function outer() {
    console.log(this); //global object
    function inner() {
        console.log(this); //also global object
    }
    inner();
}
// outer();

function aaa() {
    console.log(this);
}
function bbb() {
    aaa(); //global object
}
// bbb();

let user = {
    username: "Preetam",
    age: 26,
    email: "preetam248@gmail.com",
    isLoggedIn: true
}

// console.log(Object.entries(user))

console.log(Object.getOwnPropertyDescriptor(user, "email"));
//output
/*{
  value: 'preetam248@gmail.com',
  writable: true,
  enumerable: true,
  configurable: true
}*/

Object.defineProperty(user, "email", {
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "email"));
//output
/*
{
  value: 'preetam248@gmail.com',
  writable: false,
  enumerable: true,
  configurable: false
}
*/