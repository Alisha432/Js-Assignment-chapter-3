// question 1

// let add = (a, b) => a + b;

// console.log(add(5, 3));

// question 2

// let check = (num) => 
//   num % 2 === 0 ? "Even" : "Odd";

// console.log(check(4));
// console.log(check(7));

// question 3

// let greater = (a, b) => 
//   a > b ? a : b;

// console.log(greater(10, 5));


// question 4


// let result = (marks) => 
//   marks > 40 ? "Pass" : "Fail";

// console.log(result(50));
// console.log(result(30));

// question 5
// let check = (num) => 
//   num >= 0 ? "Positive" : "Negative";

// console.log(check(5));
// console.log(check(-3));


// question 6

// let square = (num) => {
//   return num * num;
// };

// alert(square(5));

// question 7

// let upper = (str) => {
//   return str.toUpperCase();
// };

// console.log(upper("alisha"));

// question 8

// let lower = (str) => str.toLowerCase();
// console.log(lower("HELLO"));

// question 9

// let isEmpty = (str) => str === "";
// console.log(isEmpty(""));
// console.log(isEmpty("Hi"));

// question 10

// let firstChar = (char) => char[0];
// console.log(firstChar("Hello"));

// question 11

// let firstElement = (arr) => arr[0];
// console.log(firstElement([10, 20, 30]));

// question 12

// let lastElement = (arr) => arr[arr.length - 1];
// console.log(lastElement([10, 20, 30]));

// question 13

// let count = (arr) => arr.length;
// console.log(count([1, 2, 3, 4]));

// question 14
// let evenNumbers = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(evenNumbers([1, 2, 3, 4, 6]));

// question 15

// let oddNumbers = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(oddNumbers([1, 2, 3, 4, 5]));

// question 16

// let greaterThan10 = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(greaterThan10([5, 12, 18, 7, 20]));

// question 17

// let largestNumber = (arr) => {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// };

// console.log(largestNumber([2, 9, 4, 15, 7]));

// question 18

// let smallest = (arr) => {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };

// console.log(smallest([5, 2, 9, 1]));

// question 19

// let onlyStrings = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(onlyStrings(["Ali", 5, "Sara", true]));

// question 20

// let removeLast = (arr) => {
//   arr.pop();
//   return arr;
// };

// console.log(removeLast([1, 2, 3]));

// question 21

// let sum = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// };

// console.log(sum([1, 2, 3, 4]));

// question 22

// let countVowels = (str) => {
//   let count = 0;
//   let vowels = "aeiouAEIOU";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countVowels("hello world"));

// question 23

// let removeSpaces = (str) => str.replaceAll(" ", "");
// console.log(removeSpaces("hello world"));
// question 24

// let checkWord = (sentence, word) => sentence.includes(word);
// console.log(checkWord("I am learning JS", "learning"));

// question 25

// let firstWord = (sentence) => sentence.split(" ")[0];
// console.log(firstWord("I love JS"));

//  question 26

// let lastWord = (sentence) => {
//   let words = sentence.split(" ");
//   return words[words.length - 1];
// };

// console.log(lastWord("I love JS"));

// question 27

// let reverse = (str) => str.split("").reverse().join("");
// console.log(reverse("hello"));

// question 28

// let divBy3 = (num) => num % 3 === 0;
// console.log(divBy3(9));

// question 29

// let onlyLetters = (str) => /^[A-Za-z]+$/.test(str);
// console.log(onlyLetters("Hello"));

// question 30
// let toArray = (sentence) => sentence.split(" ");
// console.log(toArray("I love JavaScript"));


