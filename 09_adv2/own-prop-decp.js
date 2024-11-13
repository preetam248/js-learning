// console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

let chai = {
    chainame: "Lemon tea",
    price: 250
};


Object.defineProperty(chai, "chainame", {
    writable: false,
    enumerable: false,
});

let descrip = Object.getOwnPropertyDescriptor(chai, "chainame");

// console.log(descrip);

chai.chainame = "black tea" //not change

// console.log(chai.chainame);


for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} -> ${value}`);
}

for (const key in chai) {
     console.log(chai[key]);
}
