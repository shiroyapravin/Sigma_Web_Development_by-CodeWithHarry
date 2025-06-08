function nice(lang) {
    console.log(lang + " Functions");
    console.log(lang + " is Good");
    console.log(lang + " is a Language");
    console.log(lang + " is best to learn");
}

nice("JavaScript");
nice("CPP");

// console.log("JavaScript Functions");
// console.log("JavaScript is Good");
// console.log("JavaScript is a Language");
// console.log("JavaScript is best to learn");

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

result1 = sum(2, 3);
console.log("Sum of these numbers is : " + result1);

result2 = sum(40, 17);
console.log("Sum of these numbers is : " + result2);

result3 = sum(40, 17, 1);
console.log("Sum of these numbers is : " + result3);

// Arrow Function
const func1 = (x) => {
    console.log("I am an arrow function", x);
}

func1(12);
func1(85);
func1(63);