function sayHelloFunc() {
  console.log('hello')
}


const myObject = {
  name: "Danielle",
  age: 35,
  sayHello: sayHelloFunc
}

const arrNames = ['jim', 'jam', 'jon'];

const myObjectJSON = JSON.stringify(myObject)

const arrNamesJSON = JSON.stringify(arrNames);

console.log(myObjectJSON)
console.log(myObject)
console.log(arrNamesJSON)
console.log(arrNames)


const arr = [];

const { fromWeb } = require("https://adventofcode.com/2020/day/2/input");
console.log (fromWeb);

