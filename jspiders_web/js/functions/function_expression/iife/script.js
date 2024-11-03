(function (){
    console.log("This is Immediately Invoked Function Expression");
})();

// IIFE with parameters and without return value
(function (numOne,numTwo){
    console.log(numOne+numTwo);
})(10,20);

// IIFE with parameters and with return value
const piValue=3.14;
// using anonymous function
var areaOfCircle=(function (radius){
    return piValue*radius**2;
})(10);
console.log(areaOfCircle);

// using arrow function
var areaOfCircle=(radius=>{return piValue*radius**2;
})(10);
console.log(areaOfCircle);