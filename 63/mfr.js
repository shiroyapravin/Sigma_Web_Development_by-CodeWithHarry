let arr = [1, 54, 32, 3, 7];

console.log(arr);

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e) => {
    return e**2;
})

console.log(newArr);

const greaterThanSeven = (e) => {
    return e>7 ? true : false;
}

console.log(arr.filter(greaterThanSeven));

let arr2 = [1, 2, 3, 4, 5];
const red = (a, b) => {
    return a*b;
}
console.log(arr2.reduce(red));