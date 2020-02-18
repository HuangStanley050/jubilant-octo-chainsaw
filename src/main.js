require("./index.html");
require("./main.css");

const objA = { a: "hi" };
const objB = { ...objA, b: "hello" };
console.log(objB);
