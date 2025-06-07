console.log("Loops in JS");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let obj = {
    name: "Hello",
    role: "Programmer",
    company: "AI"
}

for (const key in obj) {
    console.log(key);
}

for (const chars of "Hello") {
    console.log(chars);
}

let a = 6;
while (a <= 10) {
    console.log(a);
    a++;
}

do {
    console.log(a);
} while (a <= 10);