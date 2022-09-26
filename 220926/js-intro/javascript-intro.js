


// three ways to declare variables

const constVariable = 23; // can only be assigned once for the scope of this variable
// might be best to use const over let, since most variables don't get reassigned that much

let changeableVariable = 'this is a changeable variable'; // can be changed or reassigned
var oldSchoolVariable = 'stop using this!'; // decommissioned, depracated


// use of semi-colons, double-quotes vs single-quotes is most important to be consistant
// ;;;;;;;;;;
// ''''''''''''''
// """"""""""""""

// DATA TYPES
// ----------

// string (text)
const string = 'this is a bunch of letters';

// number (integer or decimal)
let num = 23 + 24;

// boolean (true or false)
let bool = 1 < 2; // outputs as TRUE

// array (list or collection of data types)
const arr = [ 'thing1', 'thing2', 'thing3', bool ]; // a collection of strings

// object (collection of keyed data)
const obj = { 
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: arr,
}

console.log(obj);
console.log('--------------');
console.log(arr);
console.log('--------------');

bool = false;
arr[1] = 'notathing';
console.log('--------------');


console.log(obj);
console.log(bool);
console.log(arr);
console.log('--------------');

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');


