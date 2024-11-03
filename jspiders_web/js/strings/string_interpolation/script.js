// var numOne = Number(prompt("Enter number one"));
// var numTwo = Number(prompt("Enter number two"));
// console.log("The addition between " + numOne + " & "  + numTwo + " is " + ((numOne)+(numTwo)) + " and The multiplication between "+ numOne + " & " + numTwo + " is " + ((numOne)*(numTwo)));

// string interpolation
// var numOne = Number(prompt("Enter number one"));
// var numTwo = Number(prompt("Enter number two"));
// console.log(`The addition between ${numOne} & ${numTwo} is ${numOne+numTwo} and The mulitplication between ${numOne} & ${numTwo} is ${numOne*numTwo}`);

// console.log(`Printing date and time ${Date()}`);

var color = prompt("Enter your fav color");
var brand = prompt("Enter your favorite brand");
document.getElementById("content").innerHTML=`I like <span style= "color: ${color}">${color}</span> color <span style="color: ${color}">${brand}</span> car`;
