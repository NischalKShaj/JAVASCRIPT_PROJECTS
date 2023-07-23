// constructor function

const scanner = require('readline-sync')

function BankAccount(Name, Account_Number, Balance=0){
    this.Name = scanner.question("Enter the name : ");
    this.Account_Number = parseInt(scanner.question("Enter the account number : "));
    this.Balance = parseInt(Balance);

    // method to check  whether sufficient balance or not

    this.bal_check = function(){
        if(this.Balance<=0){
            console.log("Insufficient balance");
        }else{
            console.log("Suffienet balance");
        }
    }
    this.add = (amount)=>{
        this.Balance += amount; 
        console.log(this.Balance);
    }
    this.greet = ()=> console.log("Thank you !");
}
let Name;
let Account_Number;
let Balance;
let Bank_A1 = new BankAccount(Name, Account_Number,20000);
console.log(Bank_A1);
Bank_A1.bal_check();
let amount = parseFloat(scanner.question("Enter the amount : "))
Bank_A1.add(amount);

Bank_A1.greet();