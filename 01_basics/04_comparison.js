// console.log(1==2)
// console.log(1>=2)
// console.log(1!=2)

// console.log("02">1); //true, take sting as a num
// console.log("02a">1); //false  

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
/*
The reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as O.
That's why (3) null >= O is true and (1) null > 0 is false.*/

// console.log(undefined == 0); false
// console.log(undefined > 0);  false
// console.log(undefined <= 0); false

// === Strict check 

// console.log("2" == 2); //true
// console.log("2" === 2); //false
// console.log(true == 1); //true
// console.log(true === 1); //false