// program for a constructor function

const scanner = require('readline-sync')

function Car(name, milage, max_speeed){
    this.name = scanner.question("Enter the name of the car : ");
    this.milage = parseInt(scanner.question("Enter the milage : "));
    this.max_speeed = parseInt(scanner.question("Enter the maximum speed"))

    this.display = ()=>{
        console.log(`Your cars name is ${this.name} ,the milage expected is ${this.milage}kmpl and the maximum speed this car catch is ${this.max_speeed}kmph`);
    }
}

let car = new Car();
car.display();