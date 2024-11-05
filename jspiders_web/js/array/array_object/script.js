// 1. declaration and initialisation on the same line 
var arrayObject = ['Sai',647712181328243,true,10.5,null,undefined,BigInt(29823247328418980984102348n)];
console.log(arrayObject);
console.log(typeof arrayObject);
// array mutability
console.log(arrayObject[0] = "SaiKumar");

// console.log(arrayObject[0]);
// console.log(arrayObject[1]);
// console.log(arrayObject[2]);
// console.log(arrayObject[3]);
// console.log(arrayObject[4]);
// console.log(arrayObject[5]);
// console.log(arrayObject[6]);
// if we access index which is not present in the array, we get 'undefined'
// console.log(arrayObject[7]);

// array iterability
for(index=0;index<=arrayObject.length-1;index++) {
    console.log(arrayObject[index]);
}

// Therefore arrays are mutable and iterable.

// In JS array size is optional, whereas in Java array size is mandatory

// 2. creating empty array object
var colors = [];
console.log(colors);
colors[0] = 'red';
colors[1] = 'blue';
colors[2] = 'lavender';
colors[3] = 'orange';
// if we skip the index, we get 'empty'
colors[5] = 'yellow';
console.log(colors);

// 3. creating array by array constructor
var arrayObject=new Array(4);
arrayObject[0]='red';
arrayObject[1]='blue';
arrayObject[2]='lavender';
console.log(arrayObject);

// 4. converting string object into array object (or) another way of creating array object
var string = "red blue green";
var array = string.split(" ");
console.log(array);