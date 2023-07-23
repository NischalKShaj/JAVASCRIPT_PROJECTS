// finding the sum of 2-D array using functions

const scanner = require('readline-sync');

main(); //calling main function since it is the having all other functions


function main(){
    let Array1 = [];
    let Array2 = [];
    let sum = [];

    let size = parseInt(scanner.question("Enter the size of the arrays"));

    // function for getting the array values
    getArray(Array1, Array2, size);

    // function for adding two arrays
    addArray(Array1, Array2, sum, size);

    // fuction for displaying the sum
    displayArray(sum)
}

// fuunction for getting the values for the array

function getArray(Array1=[], Array2=[], size){
    
    let i,j;
    console.log("Enter the values of array 1 ");
    for(i=0; i<size; i++){
        Array1[i] = [];
        for (j=0; j<size; j++){
           Array1[i][j] = parseInt(scanner.question(`value of array 1 at ${i} and ${j} is : `));
        }
    }

    console.log("Enter the values for array 2 ")
    for(i=0; i<size ; i++){
        Array2[i] = [];
        for(j=0 ; j<size; j++){
            Array2[i][j] = parseInt(scanner.question(`value of array 2 at ${i} and ${j} is : `));
        }
    }
}

// function for adding both the arrays 

function addArray(Array1=[], Array2=[], sum=[], size){
     let i,j;
    

    for(i=0; i<size; i++){
        sum[i] = [];
        for(j=0; j<size; j++){
            sum[i][j] = Array1[i][j] + Array2[i][j];
        }
    }
   
}

// function for displaying the array values

function displayArray(sum=[]){
    console.log("Sum of both array is "+sum);
}