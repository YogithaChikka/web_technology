// implicit typecasting
var number = 10;
var string = "10";
console.log(typeof (number+string), (number+string)); // string "1010"
 // String dominates bcoz any datatype can be easily converted into String
console.log(typeof (number*string), (number*string)); // number 100

// explicit typecasting
// any datatype into number
// Number(input) (input into number type)

var studentMark="95";
var convMark= Number(studentMark);
var studentMark ="NinetyFive"
console.log(typeof Number(studentMark), Number(studentMark)); // number NaN (not a number - special number) - alphaString
console.log(typeof convMark,convMark); // number 95

var numberOne="10";
var numberTwo="20";
console.log(typeof (numberOne+numberTwo),numberOne+numberTwo); // string 1020
console.log(typeof (Number(numberOne)+Number(numberTwo)),Number(numberOne)+Number(numberTwo)); // number 30

var clickedStatus = true;
console.log(typeof Number(clickedStatus), Number(clickedStatus)); // number 1