// program for income percentage

const scanner = require('readline-sync');

let amount = parseInt(scanner.question("Enter the amount : "));
let tax;
 if(amount <= 250000){
    console.log("No TAX");
 }else  if(amount >250000 && amount <= 500000){
    tax = (amount/100)*5;
    console.log(`Income tax amount = ${tax}`);
 }else if(amount > 500000 && amount<=1000000){
    tax = (amount/100)*20;
    console.log(`Income tax amount = ${tax}`);
 }else if(amount >1000000 && amount <=5000000){
    tax = (amount/100)*30;
    console.log(`income tax amount = ${tax}`);
 }
 