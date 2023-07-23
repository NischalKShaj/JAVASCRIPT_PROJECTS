// program to throw the errors


const scanner = require("readline-sync");

let height = scanner.question("Enter the height");

// try to check whether a number or not
try{
    if(typeof height!==Number){
        throw "error1";
    }else if(height > 250){
        throw "error2";
    }else if(height < 40){
        throw new error("error3");
    }
}
// catch block to catch the throwed errors
catch(error){
    if(error=="error1"){
        console.log("Not A Number");
    }else if(error == "error2"){
        console.log("Huge Height error");
    }else if(error == "error3"){
        console.log("Tiny height error");
    }else{
        console.log("valid");
    }
}


