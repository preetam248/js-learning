let myDate = new Date()

// console.log(typeof myDate); //object


// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// let myCreatedDate = new Date(2024,8,3) //montrh index from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024,8,3,23,54) //montrh index from 0
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("03/08/2024 23:55") //montrh index from 1
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //milisec
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); //sec

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());//day of week, mon-1
// console.log(newDate.getTime());
// console.log(newDate.getSeconds());
console.log(newDate.getDate());

newDate.toLocaleString("default",{
    dateStyle : "long"
})
// console.log(newDate.toLocaleString());


