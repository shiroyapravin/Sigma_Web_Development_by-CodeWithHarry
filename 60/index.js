console.log("Strings in JS");

let a = "Hello";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(2, 4));
console.log(a.slice(2));

let c = "Hello World";
let C = c.replace("World", "worlds");
console.log(c);
console.log(C);

let name1 = "Rohan";
let name2 = "Amit";
// console.log("His name is " + name1 + " & his friend's name is " + name2);
console.log(`His name is ${name1} & his friend's name is ${name2}`);
console.log(name1.concat(name2));

// let b = "He"llo";
let b = "He\"llo";
console.log(b);

let d = "    he  llo  ";
console.log(d.trim());