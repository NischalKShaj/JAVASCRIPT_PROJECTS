// calculator using switch and classes

const scanner = require('readline-sync')

class Calculator{
    add(num1, num2){
        let sum = num1 + num2;
        console.log(`Sum of the numbers are ${sum}`);
    }
    sub(num1, num2){
        let diff = num1 - num2;
        console.log(`Difference  of the numbers are ${diff}`);
    }
    multi(num1, num2){
        let prod = num1*num2;
        console.log(`Product of the numbers are ${prod}`);
    }
    div(num1, num2){
        let quot = num1/num2;
        console.log(`The quotient of the numbers are ${quot}`);
    }
}


let choice = parseInt(scanner.question("1.Add\n2.Subtract\n3.Multiply\n4.Division\nEnter the choice : "))

let calc =  new Calculator();

let num1 = parseInt(scanner.question("Enter the first number : "))
let num2 = parseInt(scanner.question("Enter the second number : "))

switch(choice){
    case 1:
        calc.add(num1, num2);
        break;
    
    case 2:
        calc.sub(num1, num2);
        break;

    case 3:
        calc.multi(num1, num2);
        break;

    case 4:
        calc.div(num1, num2);
        break;

    default:
        console.log("Enter valid operation !!!!!");
}