// class inheritance

const scanner = require('readline-sync')

class BankAccount{
    constructor(Name, Account_Number, Balance=0){
        this.Name = scanner.question("Enter the name : ");
        this.Account_Number = parseInt(scanner.question("Enter the account number : "));
        this.Balance = Balance;
    }
    checkBalance(Balance){
        if(this.Balance<=0){
            console.log("your account is haning insufficient balance ");
        }
    }
    add(amount){
        this.Balance += amount;
        console.log(`Your current balance is ${this.Balance}`);
    }

}

class SavingsAccount extends BankAccount{
    constructor(Name, Account_Number, Balance, Transactionlimit){
        super(Name, Account_Number, Balance)
        this.Transactionlimit = 10000;
        console.log(`Your transaction limit is ${this.Transactionlimit}`);
    }
}

let Name;
let Account_Number;
let Balance;
let Transactionlimit;

let Account1 = new SavingsAccount(Name , Account_Number, Transactionlimit);

Account1.checkBalance(Balance);
let amount = parseInt(scanner.question("Enter the amount for depositing : "));
Account1.add(amount);
