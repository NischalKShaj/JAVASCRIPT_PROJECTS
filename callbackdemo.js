// program for demonstrating callback

const scanner = require("readline-sync");

// declaring the callback function

function myFilter(myArray, size, callback){
    
    console.log("Enter the array values : ");
    for(let i=0; i<size; i++){
        myArray[i] = parseInt(scanner.question(""));
    }
    // callback(myArray)
    if (typeof callback === "function") {
        callback(myArray, size);
      } else {
        console.log("Callback is not a function.");
      }
}
function sum(myArray, size){
    let sum=0;
    for(let i=0; i<size; i++){
        sum += myArray[i];
    }
    console.log(sum);

    return sum%2===0
} 
const myArray =[]

let size = parseInt(scanner.question("Enter the size of the array : "))
myFilter(myArray, size, sum);