var areaOfSquare = side=>{
    var squareArea = side**2;
    return squareArea;
}
// console.log(`The area of the square is ${areaOfSquare(30)} cm`);

var areaOfCircle = radius=>{
    var circleArea = 3.14*radius**2;
    return circleArea;
}
// console.log(`The area of the circle is ${areaOfCircle(10)} cm`);

var areaOfTriangle = (base,height)=>{
    var triangleArea = (1/2)*base*height;
    return triangleArea;
}
// console.log(`The area of the triangle is ${areaOfTriangle(15,20)} cm`);

var areaOfRemPart = (side, radius, base, height)=>{
    var remainingPartArea = areaOfSquare(side) - (areaOfCircle(radius)+areaOfTriangle(base,height));
    return remainingPartArea;
}
console.log(`The area of the remaining part is ${areaOfRemPart(30,10,15,20)} cm`);
