console.log("Factorial of Number");

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());

    let c = arr.slice(1,).reduce((a, b) => a * b)

    return c;
}

console.log(factorial(6));

function factFor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact * index;
    }
    return fact;
}

console.log(factFor(5));