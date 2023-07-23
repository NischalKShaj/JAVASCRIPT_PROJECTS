// prototype function

const scanner = require("readline-sync");

function BankAccount(Name, Account_num, Balance=0){
    this.Name = scanner.question("Enter the name : ")
    this.Account_num = parseInt(scanner.question("Enter the account numeber : "));
    this.Balance = Balance;
}

// creating a prototype function for checking balance
BankAccount.prototype.balCheck = function(Balance){
    if(this.Balance<=0){
        console.log("Insufficient balance");
    }
}

// creating a prototype function for amount
BankAccount.prototype.add = function(amount){
    this.Balance += amount;
    console.log("Current balance : "+this.Balance);
}

// creating a prototype function for greeting
BankAccount.prototype.greet = function(){
    console.log("Thank you!")
}
let Name;
let Account_num;

// creating an object for account1
const Acccount1  = new BankAccount(Name, Account_num,6000);
let Balance;
Acccount1.balCheck(Balance);
let amount = parseInt(scanner.question("Enter the amount : "))
Acccount1.add(amount);
Acccount1.greet();

// creating account for account2
const Acccount2  = new BankAccount(Name, Account_num,3000);
Acccount2.balCheck(Balance);
amount = parseInt(scanner.question("Enter the amount : "))
Acccount2.add(amount);
Acccount2.greet();