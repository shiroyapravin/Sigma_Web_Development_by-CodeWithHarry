/*
let obj = {
    a: 1,
    b: "Hello"
}

console.log(obj)
*/


/*
let animal = {
    eats: true
}
let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal; // Sets rabbit.[[Prototype]] = animal
*/


class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...")
    }
    eats() {
        console.log("Eating...")
    }
    jumps() {
        console.log("Jumping...")
    }
    walks() {
        console.log("Walking...")
    }
}

let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created & he is a lion")
    }
    roar() {
        console.log("Roaring...")
    }
    walks() {
        console.log("Walking with Attitude...")
    }
    eats() {
        super.eats()
        console.log("Eating in jungle...")
    }
}

let b = new Lion("Shera");
console.log(b);