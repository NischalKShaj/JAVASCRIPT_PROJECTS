// program  to find the total numbers of even numbers in an array

const scanner = require('readline-sync')

let size = scanner.question("Enter the limit");
let A = [];
let count = 0;
let i;
console.log("Enter the array values");
for(i=0 ; i<size ; i++){
    A[i] = scanner.question("");
}
//To take the count of even number

for(i=0 ; i<size ; i++){
    if(A[i]%2==0){
        count++;
    }
}
console.log("Count of even numbers = "+count);