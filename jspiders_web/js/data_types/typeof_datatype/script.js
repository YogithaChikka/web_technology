console.log(typeof 10); // number
console.log(typeof 10.5); //number
console.log(typeof "Sai"); // string
console.log(typeof 'Sai'); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(null);
console.log(typeof null); // object (empty object - predefined)
console.log(typeof document);  // object
console.log(typeof window); // object
console.log(typeof console); // object
var value = undefined;
console.log(typeof value); // undefined
value=10;
console.log(typeof value); // number

var number = 9483192384329485913123124323543;
console.log(typeof number); // number
var number = BigInt(9483192384329485913123124323543);
console.log(typeof number); // bigint (here bigint is type of data)

var symbol = Symbol("foo");
console.log(symbol);
console.log(typeof symbol); // symbol

var numOne = 10;
var numTwo = 20;
console.log(numOne==numTwo); // false

var numberOne = BigInt(297483748246554634); // here BigInt() is a constructor
var numberTwo = BigInt(838532938294829852);
console.log(numberOne==numberTwo); //false

var symbolOne = Symbol("fool");
var symbolTwo = Symbol("fool");
console.log(symbolOne==symbolTwo); // false

var alertStatus = alert("I am alerting User");
console.log(alertStatus); // undefined

var decisionStatus = confirm("Do you want to continue?");
console.log(decisionStatus); // true or false

var username = prompt("Enter Username");
console.log(username);