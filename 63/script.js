let numbers = [0, 5, 4, 9, 78];
// Index :     0  1  2  3  4

console.log(numbers, typeof numbers);
console.log(numbers.length);
console.log(numbers[2]);

numbers[1] = 564;
console.log(numbers);
console.log(numbers[1]);

let n = [65, 74, 41, 32];
console.log(n.toString());
console.log(n.join(" & "));
console.log(n.pop());
console.log(n.push(100, "Hello"));
console.log(n);
console.log(n.shift());
console.log(n.unshift("Jack"));

delete n[2];
console.log(n);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3));
console.log(a1.concat(a3, a2).sort());
console.log(a1.concat(a2, a3).splice(2, 3));