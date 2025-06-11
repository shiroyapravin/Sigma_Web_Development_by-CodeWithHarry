let a = [1, 46, 30, 48, 80, 2];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

a.forEach((value, index, array) => {
    console.log(value, index, array);
})