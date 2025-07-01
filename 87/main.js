const fs = require("fs");
// const fs = require("fs/promises");

// console.log(fs);

console.log("starting")

// fs.writeFileSync("Hello.txt", "Hello World!");
fs.writeFile("Hello.txt", "Hello World!", () => {
    console.log("done");
    fs.readFile("Hello.txt", (err, data) => {
        console.log(err, data.toString());
    });
});

fs.appendFile("Hello.txt", "\nWelcome to world!", (err, data) => {
        console.log(err, data);
});

console.log("ending");