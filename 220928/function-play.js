const add = (a, b) => a+b;
const add2 = (a,b) => {
    return a+b;
}
function add3(a, b) {
    return a + b;
}
console.log(add('x',5));
console.log(add2('x',5));
console.log(add3('x',5));

setTimeout( (n) => console.log("hello " + n), 5000, 'jam');

