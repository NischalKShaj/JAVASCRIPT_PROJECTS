// <============================OBJECT==CREATION==========================================>

// CREATING AN OBJECT WITH THE HELP OF FACTORY FUNCTION

const scanner = require('readline-sync')

// function carType(name, speed){
//     let car={
//         name:scanner.question('Enter the name of the car : '),
//         speed:parseInt(scanner.question("ENter the engine number : ")),

//         display : (function(name,speed){
//             console.log(`This is the brand new ${this.name} and it has a speed of ${this.speed}`);
//         })
//     }
//     return car;
// }
// let newcar = carType();
// newcar.display();


// CREATING AN OBJECT WITH THE HELP OF A CONSTRUCTOR FUNCTION

// function Car(name, speed){
//     this.name = scanner.question("Enter the name of the car : ")
//     this.speed = parseInt(scanner.question("Enter the speed : "))

//     this.gearshift=()=>{
//         console.log("The gears are working properly......");
//     }

//     this.display=()=>{
//         console.log(`This is the brand new ${this.name} and it can cover upto speed of ${this.speed}kmpl `);
//     }
// }
// let name;
// let speed;
// let car1 = new Car(name, speed);

// car1.display();
// car1.gearshift();

// CREATING A CLASS WITH THE HELP OF CLASS

// class Car{
//     constructor(name, speed){
//         this.name = scanner.question("Enter the name of the car : ")
//         this.speed = parseInt(scanner.question("Enter the speed : "))
//     }
//     gearshift(){
//         console.log("Gear shift works properly....");
//     }
//     display(){
//         console.log(`This is the brand new ${this.name} and it can cover upto the speed of ${this.speed}kmpl`);
//     }
// }
// let name,speed;
// let car1 = new Car(name,speed);
// car1.display()
// car1.gearshift();