document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child was clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child-Container was clicked")
})

document.querySelector(".container").addEventListener("click", (e) => {
    alert("Container was clicked")
})