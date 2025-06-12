/* Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let ran1 = Math.random();
let ran2 = Math.random();
let ran3 = Math.random();
let first, second, third;

// 0 0.33 0.66 1
// Lets generate the first word
if (ran1<0.33) {
    first = "Crazy";
} else if (ran1>=0.33 && ran1<0.66) {
    first = "Amazing";
} else {
    first = "Fire";
}

// Lets generate the second word
if (ran2<0.33) {
    second = "Engine";
} else if (ran2>=0.33 && ran2<0.66) {
    second = "Foods";
} else {
    second = "Garments";
}

// Lets generate the third word
if (ran3<0.33) {
    third = "Bros";
} else if (ran3>=0.33 && ran3<0.66) {
    third = "Limited";
} else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);