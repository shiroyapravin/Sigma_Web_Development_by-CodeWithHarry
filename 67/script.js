console.log("Hello world!");

console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);

let cont = document.body.childNodes[1]
console.log(cont.firstChild);
console.log(cont.lastChild);
console.log(cont.childNodes);
console.log(cont.firstElementChild);

console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].parentElement);