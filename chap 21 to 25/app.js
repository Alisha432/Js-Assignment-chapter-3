
// question 1

// first name
// let firstName = prompt("Enter your first name");

// last name 
// let lastName = prompt("Enter your last name");


// let fullName = firstName + " " + lastName;

// alert("Hello " + fullName);



// question  2



// let mobile = prompt("Enter your favorite mobile phone model");


// let length = mobile.length;


// document.write("Your favorite mobile is: " + mobile + "<br>");
// document.write("Length of input: " + length);



// question 3

// let word = "Pakistani";


// let index = word.indexOf("n");


// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);


// question 4

// let word = "Hello World";


// let index = word.lastIndexOf("l");


// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + index);


// question 5

// let word = "Pakistani";

// let result = word.charAt(3);

// console.log("Character at index 3: " + result);


// question 6

// let city = "Hyderabad";


// let newCity = city.replace("Hyder", "Islam");


// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// question 7

// let message = "Ali and Sami are best friends. They play cricket and football together.";

// let result = message.replace(/and/g, "&");

// document.write(result);


// question 8

// let str = "472";

// let num = Number(str);

// document.write(str + " type: " + typeof str + "<br>");
// document.write(num + " type: " + typeof num);


// question 9

// let input = prompt("Enter text");

// document.write(input.toUpperCase());

// question 10

// let input = prompt("Enter text");

// let titleCase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

// document.write(titleCase);

// question 11

// let num = 35.36;

// let result = num.toString().replace(".", "");

// document.write(result);


// question 12

// let username = prompt("Enter username");

// if (
//   username.includes("@") ||
//   username.includes(".") ||
//   username.includes(",") ||
//   username.includes("!")
// ) {
//   alert("Please enter a valid username");
// } else {
//   document.write("Username: " + username);
// }


// question 13

// let items = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter item").toLowerCase();

// let found = false;

// for (let i = 0; i < items.length; i++) {
//   if (items[i].toLowerCase() === userInput) {
//     found = true;
//     document.write(userInput + " is available");
//     break;
//   }
// }

// if (!found) {
//   document.write(userInput + " is not available");
// }

// question 14

// let password = prompt("Enter password");

// if (
//   password.length < 6 ||
//   !isNaN(password[0])
// ) {
//   alert("Invalid password");
// } else {
//   document.write("Valid password");
// }


// question 16

// let input = prompt("Enter text");

// let lastChar = input.charAt(input.length - 1);

// document.write(lastChar);

// question 18

// let text = "The quick brown fox jumps over the lazy dog";

// let lowerText = text.toLowerCase();

// let count = lowerText.split("the").length - 1;

// document.write("Occurrences of 'the': " + count);


// question 17

// let university = "University of Karachi";
// let kar = university.split("");
// for (let i = 0; i < kar.length; i++) {
//     document.write(kar[i] + "<br>");
// }