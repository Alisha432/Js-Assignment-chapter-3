// question 1


// let char = prompt("Enter a character:");

// let code = char.charCodeAt(0);  // ASCII code nikalna

// if (code >= 65 && code <= 90) {
//     alert("Uppercase Letter");
// }
// else if (code >= 97 && code <= 122) {
//     alert("Lowercase Letter");
// }
// else if (code >= 48 && code <= 57) {
//     alert("Number");
// }
// else {
//     alert("Special Character");
// }

// question 2


// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//     alert(num1 + " is larger");
// }
// else if (num2 > num1) {
//     alert(num2 + " is larger");
// }
// else {
//     alert("Both numbers are equal");
// }


// question 03

// let num = +prompt("Enter a number:");

// if (num > 0) {
//     alert("Positive number");
// }
// else if (num < 0) {
//     alert("Negative number");
// }
// else {
//     alert("Zero");
// }

// question 5


let correctPassword = "zahra";  

let userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === num) {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}
