class User {
    constructor(username) {
        this.username = username;
        // //console.log("i am User constructor");
        
    }

    callme() {
        console.log(`I am ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, password) {
        super(username);
        this.password = password;
        // //console.log("i am Teacher constructor");
    }
}

let teacher1 = new Teacher("preetam", "123abc");

console.log(teacher1.callme());

let user1 = new User("ankush");

console.log(user1.callme());

