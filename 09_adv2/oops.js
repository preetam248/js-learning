class Parent {
  voice = "heavy";

  greet() {
    console.log("hhhhh");
  }
}

class Child extends Parent {
  height = "short";
}

let ch1 = new Child();

// console.log(ch1.greet());

class Vehicle {
  constructor(model, company) {
    this.model = model;
    this.company = company;
  }

  make() {
    console.log(`${this.model} make by ${this.company}`);
  }
}

let car1 = new Vehicle("City", "Honda");
let car2 = new Vehicle("Maruti", "Suzuki");

// car1.make();
// car2.make();

//* Encapsulation

class BankAccout {
  #balance = 0; //!by using # we cant use this variable outside class

  getBalance() {
    return `Balance: $${this.#balance}`;
  }

  diposite(amount) {
    this.#balance += amount;
    return `Balance: $${this.#balance}`;
  }

  withdrow(amount) {
    this.#balance -= amount;
    return `Balance: $${this.#balance}`;
  }
}

let newAcc = new BankAccout();

// console.log(newAcc.diposite(525));
// console.log(newAcc.withdrow(25));
// console.log(newAcc.getBalance());

// * Polymorphism

class Bird {
  fly() {
    return `flying..`;
  }
}

class Penguin extends Bird{
  fly() {
    return `can't fly`; //method override
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// console.log(Calculator.add(4,8)); //!static method call by class name itself

// * Getters and Setters

class Employee {
  #salary;

  constructor(name) {
    this.name = name;
  }

  get salary() {
    return this.#salary;
  }

  set salary(amount) {
    if (amount < 0) {
      console.log(`Invalid salary`);
    } else {
      this.#salary = amount;
    }
  }
}

let newEmp = new Employee("Preetam");

newEmp.salary = 500;
console.log(newEmp.salary);
