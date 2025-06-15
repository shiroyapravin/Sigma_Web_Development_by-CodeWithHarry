console.log("Hellooo");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "red";

document.getElementById("yellow").style.backgroundColor = "yellow";

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e => {
    e.style.color = "greenyellow";
});