//  program for finding the sum of the 2-D arrays

const scanner = require('readline-sync');

let Array1 = [];
let Array2 = [];
let sum = [];
let size = parseInt(scanner.question("Enter the size of array : "))
let i,j;

// entering value for array 1

console.log("Enter the value for array 1 : ");

 for(i=0; i<size; i++){
  Array1[i] =[];
  for(j=0; j<size ; j++){
    Array1[i][j] = parseInt(scanner.question(`value of array1 at ${i} and ${j} is : `))
  }
 }

//entering the value for array2
 
console.log("Enter the values for array 2 : ");
for(i=0; i<size ; i++){
  Array2[i] = [];
  for(j=0; j<size; j++){
    Array2[i][j] = parseInt(scanner.question(`value of array2 at ${i} and ${j} is : `))
  }
}

// for finding the sum of the arrays

console.log("Sum of the array is ");
for(i=0; i<size; i++){
  sum[i] = []
  for(j=0; j<size; j++){
    sum[i][j] = Array1[i][j] + Array2[i][j];
  }
}

// printing the sum

console.log(sum);
