import fs from "fs/promises"

// let a = await fs.writeFile("Hello2.txt", "Hello World!");
let b = await fs.readFile("Hello2.txt");
let c = await fs.appendFile("Hello2.txt", "\nWelcome to world!");

// console.log(a);
console.log(b.toString(), c);