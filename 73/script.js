function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let div = document.createElement("div")
    div.setAttribute("class", "card")
    document.querySelector(".container").append(div)

    let card = document.querySelector(".card")
    card.insertAdjacentText("afterbegin", monthsOld)
    card.insertAdjacentText("afterbegin", views)
    card.insertAdjacentText("afterbegin", cName)
    card.insertAdjacentText("afterbegin", title)
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")