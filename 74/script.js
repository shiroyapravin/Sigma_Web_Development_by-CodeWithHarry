let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Content is changed!</b> You can see."
})

button.addEventListener("contextmenu", () => {
    alert("Don't try to use right click!")
})

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode);
})

// setTimeout & setInterval
let a = setInterval(() => {
    document.querySelector(".container").style.background = "red";
}, 3000);

// clearInterval(a)

let b = setTimeout(() => {
    document.querySelector(".container").style.background = "yellow";
}, 5000);

// clearTimeout(b)