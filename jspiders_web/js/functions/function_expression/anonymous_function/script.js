var anonymousFunction = function () {
    console.log("This is anonymous function and this is also called as nameless function");
}
anonymousFunction();

// anonymous function with parameters and without return value
const piValue= 3.14;
var areaOfCircle= function (radius,piValue) {
    console.log(parseInt(piValue*radius**2));
}
areaOfCircle(5,piValue);

// anonymous function with parameters and return value
var addition = function(numOne,numTwo) {
    return numOne+numTwo;
}
console.log(addition(10,20));