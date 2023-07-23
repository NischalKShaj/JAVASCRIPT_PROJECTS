const scanner = require('readline-sync')

let num = scanner.question("Enter the number")
let flag
for(let i=0; i<num/2; i++){
    flag=0;
    if(num%2==0){
        flag=1;
        break;
    }
}
if(flag===0){
    console.log("Prime")
}else{
    console.log("Not prime");
}


