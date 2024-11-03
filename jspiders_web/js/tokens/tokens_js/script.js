// variable identifier(variableName) = data/value;

// to know difference between var, let, const

// declaration & initialisation

// var number = 10;
// console.log(number);
// let number = 10;
// console.log(number);
// const number = 10;
// console.log(number);

// only declaration

// var number;
// let number;
// const  number;

// re-initialisation

// var number = 10;
// console.log(number);
// number = 20;
// console.log(number);
// let number = 10;
// console.log(number);
// number = 20;
// console.log(number);
// const number = 10;
// console.log(number);
// number = 20;
// console.log(number);

// re-declaration

// var number;
// var number;
// let number;
// let number;
// const number;
// const number;

// scope (limitation)

// block scope

// {
//     var number1 = 10;
//     let number2 = 20;
//     const number3 = 30;
// }
// console.log(number1); (allows block scope)
// console.log(number2);  (doesnot allow block scope)
// console.log(number3);  (doesnot allow block scope)

// function scope

// function functionName(){
//     var number1 = 10;
//     let number2 = 20;
//     const number3 = 30;
// }
// console.log(number1); (doesnot allow function scope)
// console.log(number2); (doesnot allow function scope)
// console.log(number3); (doesnot allow function scope)

// hoisting

// variable hoisting

// console.log(number);
// var number;
// console.log(number);
// let number;
// console.log(number);
// const number=10;

// console.log(functionName());
// function functionName(){
//     var number = 10;
// }
console.log(functionName());
function functionName(){
    let number = 10;
}
