// program for displaying a 2D array 

const scanner = require('readline-sync')

main();

function main(){

    let Array1 = [];
    
    let size = parseInt(scanner.question("Enter the size of the array : "));

    getArray(Array1, size);

    displayArray(Array1, size);
}

// function for getting the array values 

function getArray(Array1=[], size){
    let i,j;

    console.log("Enter the array values : ");
    for(i=0; i<size; i++){
        Array1[i] = [];
        for(j=0; j<size; j++){
            Array1[i][j] = parseInt(scanner.question(`value of array at ${i} and ${j} is : `));
        }
    }
}

// function for displaying the array 

function displayArray(Array1, size){
    console.log(Array1);
}