// question 1


// let num = []

// console.log( num)


// question 2

// let students = new Array();

// console.log(students)

// question 3

// let fruits = ["Apple ", "mango", "banana"]

// console.log(fruits[1])

// question 4

// let numbers = [1 , 2 , 3 , 4 , 5]
// document.write(numbers)

// question : 5

// let booleannum = [true , false , true , true] 
// document.write(booleannum)


// question : 6
// let mixarray = [1 , " Antarctica " , true , 0 , " New York "]
// document.write(mixarray)

// question : 7
// let qualification = [ " SSC ", " HSC ", " BCS ", " BS ", " BCOM ", " MS ", " M. Phil.", " PhD"]

// document.write(qualification)


// question : 9

// a
let colors = ["red" , "violet" , "magenda" , "pink"]
document.write(`Orignal Colors ${colors} <br>`)

// b
let userColor = prompt("Which color do you want to add at the beginning") 

colors.unshift(userColor)
document.write(`Updated Color: ${colors} <br>`)

// c
let lastColor = prompt("Which color do you want to add at the end") 

colors.push(lastColor)
document.write(`Updated Color: ${colors} <br>`)


// d

colors.unshift("Black" , "White")
document.write(`Orignal Colors ${colors} <br>`)


// e

colors.shift()
document.write(`Updated Colors after removing first color: ${colors} <br>`)


// f
colors.pop()
document.write(`Updated Colors after removing last color: ${colors} <br>`)