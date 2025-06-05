alert("hello world!");

console.log("Code is running...");

var a = prompt("Enter your number");
console.log("Your number is " + a);

var isTrue = confirm("Are you sure you want to leave this page?");
if (isTrue) {
    console.log("You are leaving...");
} else {
    console.log("You are not leaving...");
}

document.title = "Hey I am good";
// document.body.style.backgroundColor = "red";