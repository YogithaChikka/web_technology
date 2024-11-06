var colors = ["red","white","blue","green","orange","white","green"];

// indexOf(element) : index
console.log(colors.indexOf("white"));

// indexOf(element, fromIndex) : index
console.log(colors.indexOf("white",2));

// lastIndexOf(element): lastIndex
console.log(colors.lastIndexOf("white"));

//lastIndexOf(element, fromIndex) : lastIndex
console.log(colors.lastIndexOf("white",4));

// TO CONVERT ARRAY OBJECT TO STRING OBJECT - 2 functions

// .join(seperator): string
var studentNames= ["ramu","hemu","sai"];
console.log(typeof studentNames.join(), studentNames.join(" | "));

// toString(): string
console.log(studentNames.toString().replaceAll(","," "));

// reverse(): reversedArrayObject
var colors=["red","green","blue"];
console.log(colors.reverse());

// push and pop will do the operations from the last

// push(element): length
var colors = ["red","white","blue","green"];
console.log(colors.push("orange","pink")); // added given elements to the array at the last
console.log(colors);

// pop(): removedLastElement
console.log(colors.pop()); 
console.log(colors);

// shift and unshift will do the operations from the first 

// shift(): removedFirstElement
console.log(colors.shift());

// unshift(elements): length
var colors = ["red","white","blue","green"];
console.log(colors.unshift("hotpink","magenta")); // added given elements to the first
console.log(colors);


var colors=["red","green","blue"];
var first=0 ;
var last=colors.length-1;
while (first<last) {
    var temp=colors[first];
    colors[first]=colors[last] ;
    colors[last]=temp ;
    first+=1 ;
    last-=1 ;
}
console.log(colors) ;

var colors = ["red","white","blue","green","orange","white","green"];
for(index=0;index<=colors.length-1;index++) {
    if (colors[index]=="white") {
        console.log(index);
    }
}