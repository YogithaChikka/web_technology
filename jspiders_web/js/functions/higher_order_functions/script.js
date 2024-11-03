// higher order functions accept call back functions as parameters

// call back functions are passed as arguments to higher order functions

// named function
// function callBackOne() {
//     console.log("Call Back One");
// }
// function callBackTwo() {
//     console.log("Call Back Two");
// }
// function callBackThree() {
//     console.log("Call Back Three");
// }
// function higherOrder(callBackOne,callBackTwo,callBackThree) {
//     callBackOne();
//     callBackTwo();
//     callBackThree();
// }
// higherOrder(callBackOne,callBackTwo,callBackThree);

// anonymous function
var callBackOne= function () {
    console.log("CallBackOne");
}
var callBackTwo= function () {
    console.log("CallBackTwo");
}
var higherOrder= function (callBackOne,callBackTwo) {
    callBackOne();
    callBackTwo();
}
higherOrder(callBackOne,callBackTwo);

// arrow functions
var callBackFirst = ()=>console.log("CallBackFirst");

var callBackSecond = ()=>console.log("CallBackSecond");
var higherOrder= function (callBackFirst,callBackSecond) {
    callBackFirst();
    callBackSecond();
}
higherOrder(callBackFirst,callBackSecond);