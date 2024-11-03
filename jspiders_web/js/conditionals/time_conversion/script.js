var userTime = Number(prompt("Enter time"));
if (userTime>12) {
    userTime-=12;
    console.log(userTime+" PM");
}
else {
    console.log(userTime+" AM");
}