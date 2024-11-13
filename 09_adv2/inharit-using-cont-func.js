// DOCUMENTATION: Inharit using constructor function

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

Employee.prototype.getDetails = function () {
  return `${this.name},${this.salary},${this.experience}`;
};

let emp1 = new Employee("Preetam", 250000, 6);

// console.log(emp1.getDetails());

function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

let prog1 = new Programmer("Harry", 266640, 8, "JavaScript");
console.log(prog1.getDetails());
