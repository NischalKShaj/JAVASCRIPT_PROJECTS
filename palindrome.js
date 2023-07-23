//  palindrome

const scanner = require('readline-sync')

let txt = scanner.question("Enter the string : ");
let flag;
let size = txt.length;

for(let i=0; i<size/2; i++){
    flag=0;
    if(txt[i] !== txt[size-1-i]){
        flag = 1;
        break;
    }
}
if(flag==0){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}
