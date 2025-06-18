function createCard(vidNum, title, cName, views, monthsOld, duration, thumbnail) {
    let viewNum;
    if (views >= 1000 && views < 1000000) {
        viewNum = views / 1000 + "K";
    } else if (views >= 1000000) {
        viewNum = views / 1000000 + "M";
    } else {
        viewNum = views;
    }

    let html = `<div class="card">
                    <div class="number">${vidNum}</div>
                    <div class="image">
                        <img src="${thumbnail}" alt="">
                        <div class="capsule">${duration}</div>
                    </div>
                    <div class="text">
                        <h2>${title}</h2>
                        <p>${cName} • ${viewNum} views • ${monthsOld} months ago</p>
                    </div>
                </div>`;

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard(2, "JavaScript for Backend | Sigma Web Dev video #2", "CodeWithHarry", 2500000, 1.5, "30:18", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard(3, "JavaScript for Backend | Sigma Web Dev video #3", "CodeWithHarry", 500, 1.3, "25:57", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")