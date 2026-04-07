// Question 1

// let city = prompt("Enter your city name");

// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }



// question 


// let gender = prompt("Enter your gender:");

// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma’am");
// }

// question 3


// let color = prompt("Enter traffic signal color:");

// if (color === "red") {
//     alert("Must Stop");
// } else if (color === "yellow") {
//     alert("Ready to move");
// } else if (color === "green") {
//     alert("Move now");
// }


// question 4

// let fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// question 5


// (a)
// let a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// // (b)
// let b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// // (c)
// let c = 12;

// if (c++ === 13){
//     alert("condition 1 is true");
// }

// if (c === 13){
//     alert("condition 2 is true");
// }

// if (++c < 14){
//     alert("condition 3 is true");
// }

// if (c === 14){
//     alert("condition 4 is true");
// }

// // (d)
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// // (e)
// if (true){
//     alert("True");
// }

// if (false){
//     alert("False");
// }

// // (f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// question 6


// Subjects marks 
let subject1 = +prompt("Enter marks of Subject 1:");
let subject2 = +prompt("Enter marks of Subject 2:");
let subject3 = +prompt("Enter marks of Subject 3:");

// Total marks
let totalMarks = +prompt("Enter total marks:");

// Obtained marks calculate 
let obtainedMarks = subject1 + subject2 + subject3;

// Percentage calculate 
let percentage = (obtainedMarks / totalMarks) * 100;

// Grade 
let grade;

if (percentage >= 80) {
    grade = "A+";
} 
else if (percentage >= 70) {
    grade = "A";
} 
else if (percentage >= 60) {
    grade = "B";
} 
else if (percentage >= 50) {
    grade = "C";
} 
else {
    grade = "Fail";
}

// Simple output 
console.log("Result<br>");
console.log("Total Marks: " + totalMarks + "<br>");
console.log("Obtained Marks: " + obtainedMarks + "<br>");
console.log("Percentage: " + percentage + "%<br>");
console.log("Grade: " + grade);


// question 7

// // Secret number between 1 and 10
// let secretNumber = 7; // you can change it
// let userGuess = +prompt("Guess the secret number (1-10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Wrong guess! Try again.");
// }

// question 8

// let number = +prompt("Enter a number to check if divisible by 3:");

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

// question 9

// let num = +prompt("Enter a number to check if it is even or odd:");

// if (num % 2 === 0) {
//     alert(num + " is an even number.");
// } else {
//     alert(num + " is an odd number.");
// }

// question 10

// let temp = +prompt("Enter the temperature in °C:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("Brrr! It’s very cold today.");
// }

// question 11


// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let operation = prompt("Enter operation (+, -, *, /, %):");
// let result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operation!";
// }

// alert("Result: " + result);