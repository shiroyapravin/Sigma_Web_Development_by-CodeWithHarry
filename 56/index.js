console.log("Hello I am JS Conditional");

let age = 17;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);

if ((age+grace) > 18) {
    console.log("you can drive");
} else {
    console.log("you can not drive");
}

let a = 10;
let b = 2;

let c = (a > b) ? (a - b) : (b - a);
console.log(c);