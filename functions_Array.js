// playing with functions 

const scanner = require('readline-sync')

main(); // calling the main function 

// declaring the body of the main function
function main(){
    let A = [];
    let size = scanner.question("Enter the limit : ");

    // calling function to insert the value

    getArray(A, size);

    // calling the display function inorder to show the array

    display(A, size);


}

// function to get the array value
function getArray(A=[],size){
    console.log("Enter the Array values : ");
    for(let i=0; i<size; i++){
        A[i] = scanner.question("");
    }
}

// function to display the function 
function display(A=[], size){
    console.log("Values of array is : ")
    for(let i=0; i<size ;i++){
        console.log(A[i])
    }
}