function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

let myCar1 = new Car("Tata", "Nexon");
let myCar2 = new Car("Toyota", "Supra");

// console.log(myCar1);
// console.log(myCar2);

let User = function (name, age) {
  this.name = name;
  this.age = age;
  this.call = function () {
    console.log(`Hi, ${this.name}`);
  };
};

let userOne = new User("Preetam", 26);
let userTwo = new User("Soubhik", 22);

// console.log(userOne);
// console.log(userTwo.call());

function Animal(spicess) {
  this.spicess = spicess;
}

Animal.prototype.sound = function () {
  console.log(`${this.spicess} make sound`);
};

let dog = new Animal("Dog");
// console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Use new keyword");
  }

  this.name = name;
}

let chai = new Drink("chai");
let coffee = Drink("coffee");
