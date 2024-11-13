class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = `${value}abc`;
    }
}

let userOne = new User("Preetam", "thorfan");
// userOne.password = "maka";
console.log(userOne.password);