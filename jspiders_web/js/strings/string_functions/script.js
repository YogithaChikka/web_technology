var string = "apple";
//length property
console.log(string.length);

// charAt(index) : char
console.log(string.charAt(0));

// indexOf(char) : index
console.log(string.indexOf("p"));

// indexOf(char,searchIndex) : index
var string = "appleapple";
console.log(string.indexOf("p",2));
console.log(string.indexOf("p",3));

// lastIndexOf(char) : index
console.log(string.lastIndexOf("p"));
var string = `She sells seashells on the seashore, 
The shells she sells are surely seashells 
So if she sells shells on the seashore, I am sure 
she sells seashore shells.`;
console.log(string.indexOf("sells",3));

var string = "apple";

// slice(startIndex,endIndex) : slicedString
console.log(string.slice(0,3));
console.log(string.slice(3,5));
console.log(string.slice(-5,3));
console.log(string.slice(4,-5));
console.log(string.slice(0,5));

// substring(startIndex,endIndex) : substring
// doesnot take negative index - converts negative index to zero 

console.log(string.substring(0,5));
console.log(string.substring(-5,3));
// if negative index given as endIndex it converts negative index to zero - converted as (0,2)
console.log(string.substring(2,-1));

//substr(startIndex,lengthOfIndex) : substring

console.log(string.substr(0,3));
console.log(string.substr(0,4));

//replace(oldString, newString) : null
//string= string.replace("sells", "buys");
//console.log(string);

//replaceAll(oldString,newString) : null
//string=string.replaceAll("sells","buys");
//console.log(string);

//console.log(string.replace("sells shells", "buys shells"));

var firstSlicedString= string.slice(0,89);
console.log(firstSlicedString);
var secondSlicedString= string.slice(89);

var replacedSecondSlicedString= secondSlicedString.replace("sells","buys");
var replacedString = firstSlicedString+replacedSecondSlicedString;
console.log(replacedString);


var fruitName = " a p p l e ";
console.log(fruitName);
// trim() - will remove the whitespaces
console.log(fruitName.trim());
// trimStart()
console.log(fruitName.trimStart());
// trimEnd()
console.log(fruitName.trimEnd());
console.log(fruitName.replaceAll(" ",""));

var string = "Technology";
//padStart(totalLength,string)
console.log(string.padStart(13,"Web"));
console.log(string.padStart(14,"Web "));
//padEnd(totalLength,string)
console.log(string.padEnd(21,"Development"));

var string = `She sells seashells on the seashore, 
The shells she sells are surely seashells 
So if she sells shells on the seashore, I am sure 
she sells seashore shells.`;
// split(regularExpression) : arrayObject
console.log(string.split("")); // splits into character
console.log(string.split(" ")); // splits into word based on space
console.log(string.split("sh")); // splits based on parameter


