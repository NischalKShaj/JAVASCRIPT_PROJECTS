// program to multiply cosicutive values

const scanner = require('readline-sync');



let Array1 = [];
let Array2 = [];
let i;
let size = parseInt(scanner.question("Enter the limit : "));
console.log("Enter the values of array");

for( i=0; i<size;i++){
    Array1[i] = parseInt(scanner.question("")); 
}

// for multipling adjacent values and store in new array
for(i=0; i<size; i++){
    Array2[i] = Array1[i]*Array1[i+1];
}


console.log("Values after consicutive multiplication");
for(i=0; i<size-1; i++){
    console.log(Array2[i]);
}