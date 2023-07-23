// program to demonstrate template literal

const scanner = require('readline-sync')

let num1 = Number(scanner.question("Ente the 1st number : "))
let num2 = Number(scanner.question("Ente the 2nd number : "))

let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`); 