require("./index.html");
require("./main.css");

const objA = { a: "hi" };
const objB = { ...objA, b: "hello" };
console.log(objB);

const a = async () => {
  await console.log("Hi I am from the future");
};
