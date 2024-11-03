var databaseUsername = "sai123";
var inputUsername = prompt("Enter Username");
var databasePassword = "saikumar";
var inputPassword = prompt("Enter Password");
if (databaseUsername==inputUsername) {
    if (databasePassword==inputPassword) {
        console.log("Login Successful");
    }
    else {
        console.log("Enter valid password");
    }
}
else {
    console.log("Enter valid username");
}