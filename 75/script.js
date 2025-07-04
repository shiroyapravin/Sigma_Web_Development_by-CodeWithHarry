console.log("Hello world 1");
console.log("Hello world 2");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("Hello world 3");

// Callback function
const fn = () => {
  console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hello", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);