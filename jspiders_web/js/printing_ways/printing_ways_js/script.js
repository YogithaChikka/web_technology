// console.log("This is on console");
// console.log(5+5);
// console.log(console);
// console.error("This is my error");
// console.log(document);
// console.log(window);

// document.write("<span style='color:blue'>This is on UserInterface</span>");
// document.write("This is first statement<br>");
// document.writeln("This is second statement");
// document.writeln("This is third statement");

// window.alert("This is pop up box");
// window.console.log("console object is having direct relation with window object");
// window.document.write("document object is also having direct relation with window object");


// when we have direct relation with window object we can use it directly without specifying

// console.log("console object is having direct relation with window object");
// document.write("document object is also having direct relation with window object");
// alert("This is pop up box");


document.getElementById("wt_heading").innerHTML="WebTechnology";
document.getElementById("cj_heading").innerHTML="CoreJava"
document.getElementById("container_one").innerHTML="<div style= 'width:100px; height: 100px; background-color: red;'></div>";
document.getElementById("container_two")
.innerText="<div style= 'width:100px; height: 100px; background-color: red;'></div>";
function divChildren(){
    document.getElementById("container_one").innerHTML="<div style= 'width:100px; height:100px; background-color:red;'><div style= 'width: 50px; height: 50px;background-color: orange'><div style= 'width: 30px; height: 30px; background-color: red'></div></div></div>";
    document.getElementById("table_container").innerHTML="<br> <table style = 'border: 5px solid darkblue; border-collapse: collapse;'><tr style = 'border: 3px solid red;'><td style = 'border: 3px solid red;'>FirstName</td><td style = 'border: 3px solid red;'>Sai</td></tr><tr style = 'border: 3px solid red;'><td style = 'border: 3px solid red;'>LastName</td><td>Kumar</td></tr><tr style = 'border: 3px solid red;'><td style = 'border: 3px solid red;'>Id_No</td><td>1101</td></tr></table>"
}
function getName(){
    
}