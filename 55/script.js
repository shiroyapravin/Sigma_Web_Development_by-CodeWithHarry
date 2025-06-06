console.log("hello world!");

var a = 5;
var b = 6;
console.log(a + b);

var c = "Hiii";
console.log(typeof a, typeof b, typeof c);

// valid variable names -> starts with _, $ or letters
// invalid variable names -> starts with numbers
// a & A are different

// var VS let or const
// var is globally scoped & let/const are block scoped
let A = 10;
{
    let B = 30;
    console.log(B);
}
console.log(A);
// var can be updated & redeclared
var a1 = 10;
a1 = a1 + 1;
// let can be updated
let b1 = 15;
b1 = b1 + 5;
// const cannot be updated
const c1 = 20;

// Primitive Data Types
let x = "Hello";
let y = 22;
let z = 3.14;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Object
let item = {
    name: "Led Bulb",
    price: 150,
    "Company Name": "Havells"
}

console.log(item);
item.offer = 50;
console.log(item);
item.offer = 80;
console.log(item);