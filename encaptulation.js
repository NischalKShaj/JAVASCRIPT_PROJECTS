// encaptulation

 const scanner = require("readline-sync")


// normal case 
// let employee = {
//     salry :parseInt(scanner.question("Enter the salary : ")),
//     hrs:parseInt(scanner.question("Enter the the hours : ")),
//     rate :parseInt(scanner.question("Enter the rate : ")),
//     wget:function(){
//         return console.log(this.salry + (this.hrs*this.rate));
//     }
// }
// total = 
// employee.wget()
// console.log(total);


// using factory function

// function Circle(radius){

   
//     return {
//          radius,
         
//          draw:function(){
//             console.log(this.radius);
//          }
//     }
// }
// let rad = parseInt(scanner.question("Entr the radius"))
// Circle(rad).draw()

// using constructors

// function Circle(radius){
//     this.radius = radius;
//     this.draw = ()=>{
//         console.log(this.radius);
//     }
// }
// let rad = parseInt(scanner.question("Enter the radius"))
// let circle = new Circle(rad).draw()

// using classes

class Car{
    constructor(Engine, Modelnumber){
        this.Engine = Engine;
        this.Modelnumber = Modelnumber;
    }
    spec = ()=>{
        console.log(this.Engine);
        console.log(this.Modelnumber);
    }
}
let Engine = parseInt(scanner.question("Enter the Engine number : "));
let Modelnumber = scanner.question("Enter the engine model : ")
let car = new Car(Engine,Modelnumber)
car.spec()
