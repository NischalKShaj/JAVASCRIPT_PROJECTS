// class declaration 

const scanner = require('readline-sync')

// class declared
class BankAccount{

    //constructor declared 
    constructor(Name, Account_number, Balance=0){
        this.Name = scanner.question("Enter the Name : ");
        this.Account_number = parseInt(scanner.question("Ente the Account number : "));
        this.Balance = Balance;
    }

    // method checkBalance declared
    checkBalance(Balance){
        if(this.Balance<=0){
            console.log("Insufficient balance : "+this.Balance);
        }
    }

    // method add declared
    add(amount){
        this.Balance += amount;
        console.log("Current balance is = "+this.Balance);
    }

    // method greet declared
    greet(){
        console.log("Thank you for banking with us !");
    }
}

// object creation phase
let Name;
let Account_number;
let Balance;

// object for account 1
const Account1 = new BankAccount(Name, Account_number);


// calling functions........
Account1.checkBalance(Balance);
let amount = parseInt(scanner.question("Enter the amount for depositing : "))
Account1.add(amount);
Account1.greet();