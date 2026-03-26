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


// question 6

// let marks1 = +prompt("Enter marks for Subject 1:");
// let marks2 = +prompt("Enter marks for Subject 2:");
// let marks3 = +prompt("Enter marks for Subject 3:");

// let totalMarks = +prompt("Enter total marks:");

// // Step 2: Calculate total and percentage

// let totalObtained = marks1 + marks2 + marks3;
// let percentage = (totalObtained / totalMarks) * 100;

// // Step 3: Determine grade and remarks


// let grade, remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Very Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "Good";
// } else if (percentage >= 50) {
//     grade = "C";
//     remarks = "Needs Improvement";
// } else {
//     grade = "Fail";
//     remarks = "Poor";
// }

// // Step 4: Display results in 


// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + totalObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

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