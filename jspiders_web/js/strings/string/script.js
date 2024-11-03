// literals

var firstName = "Sai";
var lastName = 'Kumar';

// Drawback of literals : Cannot use multiple lines and cannot use double quotes inside double quotes and single quotes inside single quotes

// String()

var subjectName = String("Web 'Technology'");
var designation = String('Web Developer');

// template literals

var String =  `This template literals will allow developer to have 
multiple lines string and it can also have "double quotes" 
and also can have 'single quotes'`;

document.getElementById("table").innerHTML=
`
<table style="border: 2px solid red; border-collapse: collapse;">
        <tr>
            <th style="border: 2px solid red;">RollNo</th>
            <th style="border: 2px solid red;">Name</th>
        </tr>
        <tr>
            <th style="border: 2px solid red;">100</th>
            <th style="border: 2px solid red;">Sai</th>
        </tr>
        <tr>
            <th style="border: 2px solid red;">101</th>
            <th style="border: 2px solid red;">Kumar</th>
        </tr>
    </table>
`

// string im-mutability

var string = "SaaaaaiKumar";
string[0]="J";
console.log(string);

// Yes, Strings are immutable

// string iterability

for(i=0;i<=string.length-1;i++) {
    console.log(string[i]);
}

// Yes, Strings are iterable