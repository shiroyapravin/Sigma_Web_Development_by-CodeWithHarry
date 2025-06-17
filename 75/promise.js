console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
        reject("Random number is not supporting...");
    } else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Helloooo");
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
        reject("2 Random number is not supporting...");
    } else {
        setTimeout(() => {
            console.log("2 Yes I am done");
            resolve("2 Helloooo");
        }, 3000);
    }
})

let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})