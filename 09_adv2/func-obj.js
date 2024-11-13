//DOCUMENTATION: Function is also an object

function greet() {
  console.log("Hello world!");
}

//* Assign properties in a function like object

greet.language = "English";

//* Assign method in a function like object

greet.sayGoodBye = function () {
  console.log("Good Bye!");
};

greet();

console.log(greet.language);

greet.sayGoodBye();

console.log(greet.prototype); // empty obj

greet.prototype.someVal = "RandomStr";

console.log(greet.prototype); //someVal comes in prototype

greet.prototype.randFunc = function () {
  return `Rand`;
};

console.log(greet.prototype); //someVal, randFunc comes in prototype

//CONCLUSION: func is an obj, it's prototype is an empty obj, we can add properties/method in this prototype, This prototype's prototype is Object
