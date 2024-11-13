/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    }
    
    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return this.username.toUpperCase();
    }
}

let userOne = new User("ankush", "ad@gmail.com", "hola1234");

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());
*/

//* Behind the scene (under the hood)

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
  return this.username.toUpperCase();
};

let userOne = new User("ankush", "ad@gmail.com", "hola1234");

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());