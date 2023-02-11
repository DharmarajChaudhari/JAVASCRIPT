let hold = prompt("Enter number of classes you held=");
hold = Number.parseInt(hold);

let attendance =prompt("Enter number of classes you attended=");

attendance = Number.parseInt(attendance);

percentage=attendance/hold*10;

if(percentage>=75)

{

console.log("The student is allowed to sit in the exar hall");

}

else

{

console.log("The student is not allowed to to sit in the exam hall");

}