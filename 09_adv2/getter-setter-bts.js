function User(username, password) {
  this.username = username;
  this._password = password;

  //* Getter - Setter under hood

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

let newUser = new User("preetam", "abc123");
console.log(newUser.password);
