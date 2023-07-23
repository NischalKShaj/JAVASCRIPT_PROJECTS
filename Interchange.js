const scanner = require('readline-sync')
let A1= []
let A2 = []
let temp;
let size = scanner.question("Enter the size");

console.log("Enter the aray 1")
for(var i=0;i<size;i++){
    A1[i] = scanner.question("")
}

console.log("Enter the array 2");
for(var i=0;i<size;i++){
    A2[i] = scanner.question("")
}
for( var i=0;i<size;i++){
    temp = A1[i]
    A1[i] = A2[i]
    A2[i] =temp  
}
console.log("Array 1");
for(i=0;i<size;i++){
    console.log(A1[i])
}

console.log("Array 2");
for(i=0;i<size;i++){
    console.log(A2[i])
}

