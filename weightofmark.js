// program for calculating the average marks

const scanner = require('readline-sync');

let name = scanner.question("Enter the name of the candidate : ")
console.log("Enter the marks of each exam");

let writtenTest = parseInt(scanner.question("Enter the mark for the writen exam : "))
let labExam = parseInt(scanner.question("Enter the lab exam  mark : "))
let Assignment = parseInt(scanner.question("Enter the marks gained in assignments"))

let grade = parseFloat(((writtenTest*70)/100) + ((labExam*20)/100) + ((Assignment*10)/100))

console.log(`The grade of ${name} is ${grade}`);