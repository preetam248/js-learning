//*JavaScript is a prototype based language but use of many OOPs nomenclature make it feel like OOPs but its not its only sugar coated

let computer = {
    cpu: 4,
    ram: 12
}

let dell = {
    screen: "HD",
    __proto__: computer
}

// console.log(dell.__proto__);

let genericCar = {
    wheels: 4,
    headlights: 2
};

let tesla = {
    driver: "AI"
};

// Object.setPrototypeOf(tesla, genericCar);


// console.log(Object.getPrototypeOf(tesla));

let x = Object.getPrototypeOf(tesla);

// console.log(tesla.hasOwnProperty("wheels"));
// console.log(tesla.hasOwnProperty("driver"));
