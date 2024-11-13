// Global context
console.log(this); // In a browser, this is the window object

// In an object method
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // 'this' refers to the person object
  },
};
person.greet(); // Output: 'Alice'

// In a function (non-strict mode)
function showThis() {
  console.log(this); // In a browser, 'this' is the global window object
}

showThis();


const person1 = {
    name: 'Alice',
    greet: function(age) {
        console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
    }
};

const person2 = { name: 'Bob' };

// Using call to borrow the greet method from person1 and use it in the context of person2
person1.greet.call(person2, 25);
// Output: 'Hello, my name is Bob and I am 25 years old.'
