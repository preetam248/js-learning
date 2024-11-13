function myFunc() {
  console.log("Hello world!");
}

myFunc.jjj = "Hola"; // add property in func

// console.log(myFunc.jjj); // access prop of func by . notation

//! Its possible because in js function is also a object

// console.log(myFunc.prototype);

let user = {
  username: "preetam",
};

let teacher = {
  techname: "hitesh",
  __proto__: user, //! all user prop access by link prototype
};

let techSupport = {
  supportname: "gokul",
};

let assignSupport = {
  assignname: "suresh",
};

techSupport.__proto__ = user; //! all user prop access by link prototype

Object.setPrototypeOf(assignSupport, user); //! all user prop access by link prototype

// console.log(teacher.username);
// console.log(techSupport.username);
// console.log(assignSupport.username);


function SetUsername(username) {
  this.username = username;  //this refers global object
}

function CreateUser(username, email, password) {
  this.email = email;;
  this.password = password;

  // SetUsername(username); 
  SetUsername.call(this,username);
}

let newUser = newCreateUser("preetam", "pd@1998.gmail.com", "abc123");

// console.log(newUser);



