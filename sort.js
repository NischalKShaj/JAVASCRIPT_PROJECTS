// program to sort an array

const scanner = require('readline-sync')

let A = [];
let i;
let size = scanner.question("Enter the size");
console.log("Enter the values of array");

// user input values 

for(i=0 ; i<size ; i++){
    A[i] = scanner.question("");
}

// sorting the array 

let sortedArr = A.sort((a, b)=> b - a ); 
// output of the sorted array

console.log(sortedArr);
