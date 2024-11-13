function User(username, age, isLoggedIn) {
  this.username = username;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    console.log(this);
  };
}
// console.log(User.prototype);

User.prototype.showDetails = function () {
    console.log(`${this.username},${this.age},${this.isLoggedIn}`)
}


let userOne = new User("Preetam", 26, false);

userOne.greet();

// console.log(User.prototype);
// userOne.showDetails();