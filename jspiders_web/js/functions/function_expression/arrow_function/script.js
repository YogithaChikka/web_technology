var arrowFunction=()=>{
    console.log("This is arrow function");
}
arrowFunction();

// arrow function with parameters and without return value
// without return value -> call
const piValue = 3.14;
var areaOfCircle=radius=>console.log(piValue*radius**2);
areaOfCircle(5);

// arrow function with parameters and with return value
// with return value -> print
var addition =(numOne,numTwo)=>{
    var addition = numOne+numTwo;
    return addition;
}
console.log(addition(10,20));
