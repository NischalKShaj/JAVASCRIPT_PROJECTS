// // constructor inheritence

// =====================NOT WORKING ==========================================================>

 const scanner = require('readline-sync');

// function BankAccount(Name, Account_number, Balance=0){
//     this.Name = scanner.question("Enter your name : ");
//     this.Account_number = parseInt(scanner.question("Enter your account number : ")) 
//     this.Balance  = Balance;

// }
// BankAccount.prototype.checkBalance = function(Balance){
    
//     if(this.Balance<=0){
//         console.log("Your account is having insufficient balance ");
//     }
// }
// BankAccount.prototype.add = function(amount){
//     this.Balance += amount;
//     console.log(`Your current balance is ${this.Balance}`);
// }
// BankAccount.prototype.greet = function(){
//     console.log("Thank you for banking with us");
// }
// function CurrnetAccount(Name, Account_number, Balance){
//     BankAccount.call(this, Name, Account_number,Balance)
//     this.transactionLimit = 100000;
//     console.log(transactionLimit);
// }
// CurrnetAccount.prototype.loan = function(loanamount){
//     this.loanamount = parseInt(scanner.question("Enter your loan amount : "))
//     console.log(this.loanamount)
// }

// let Name;
// let Account_number;
// let Balance;
// let loanamount;
// let Account1 = new CurrnetAccount(Name, Account_number,4000);

// Account1.checkBalance(Balance);
// let amount = parseInt(scanner.question("Enter the amount : "));
// Account1.add(amount);
// Account1.loan(loanamount);
// Account1.greet();


