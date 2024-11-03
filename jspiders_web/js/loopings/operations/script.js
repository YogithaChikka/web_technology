var repeat;
do {
    var numOne = prompt("Enter first number");
    var numTwo = prompt("Enter second number");
    var operation = prompt("Enter operation");
    if (operation=="add") {
        console.log(Number(numOne)+Number(numTwo));
        repeat = confirm("Do you want to continue?");
    }
    else if (operation=="sub") {
        console.log(Number(numOne)-Number(numTwo));
        repeat = confirm("Do you want to continue?");
    }
    else if (operation=="mul") {
        console.log(Number(numOne)*Number(numTwo));
        repeat = confirm("Do you want to continue?");
    }
    else if (operation=="div") {
        console.log(Number(numOne)/Number(numTwo));
        repeat = confirm("Do you want to continue?");
    }
    else if (operation=="mod") {
        console.log(Number(numOne)%Number(numTwo));
        repeat = confirm("Do you want to continue?");
    }
}while(repeat);