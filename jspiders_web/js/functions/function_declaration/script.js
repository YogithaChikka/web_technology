// function declaration

// --------- functions with no parameters and return value ---------

// var numOne = Number(prompt("Enter number one"));
// var numTwo = Number(prompt("Enter number two"));
// var outputElement = document.getElementById("output");

// function addition() {
//     outputElement.innerHTML=`The addition between ${numOne} and ${numTwo} is <span style="color:red">${numOne+numTwo}</span>`;
// }
// function subtraction() {
//     outputElement.innerHTML=`The subtraction between ${numOne} and ${numTwo} is <span style="color:red">${numOne-numTwo}</span>`;
// }
// function multiplication() {
//     outputElement.innerHTML=`The multiplication between ${numOne} and ${numTwo} is <span style="color:red">${numOne*numTwo}</span>`;
// }
// function division() {
//     outputElement.innerHTML=`The division between ${numOne} and ${numTwo} is <span style="color:red">${numOne/numTwo}</span>`;
// }

// --------- functions with parameters ---------

// var speed = prompt("Enter the speed");
// var time = prompt("Enter the time");

// function toCalculateDistance(speed,time) {
//     var distance = speed * time;
//     document.write(`The distance travelled is : ${distance}`);
// }
// toCalculateDistance(speed,time);

// --------- functions with parameters and return value ---------

// function toSquareNumber(number) {
//     var square = number*number;
//     return square;
// }
// var squaredValue = toSquareNumber(4);
// console.log(squaredValue);

// console.log(toSquareNumber(4));

// ================================== TASKS ==================================

// 1. write a function to find simple interest 
// 2. write a function to find emi 
// 3. Why we have to use functions with return value? OR What is the purpose of function with return value?

// function toCalculateSI(principal,rateOfInterest,time) {
//     var SI = principal*rateOfInterest*time/100;
//     return SI;
// }
// console.log(`The Simple Interest is ${toCalculateSI(1000,3,2)}`);
// console.log(`The Simple Interest is ${toCalculateSI(5000,3.5,4.5)}`);

function toCalculateEmi(principal,time) {
    var months=time*12 ;
    var emi = principal/months;
    return emi;
}
console.log(`The EMI is ${Math.round(toCalculateEmi(500000,2))}`);

// The purpose of function with return value is, we can use the returned value for any operation without rewriting the code/logic
 