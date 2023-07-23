// area of different shapes

const scanner = require('readline-sync')

// class Area 
class Area{
    circle(){
        const pi = 3.14;
        let radius = parseFloat(scanner.question("Enter the radius : "))
        let areaCir = pi *(radius**2);
        console.log(`Area of circle is ${areaCir}`);
    }
    square(){
        let side = parseFloat(scanner.question("Enter the side : "))
        let areaSqu = side * side;
        console.log(`Area of square is ${areaSqu}`);
    }
    rectangle(){
        let length = parseFloat(scanner.question("Enter the length : "));
        let breadth = parseFloat(scanner.question("Enter the breadth :  "));
        let areaRect = length * breadth;
        console.log(`Area of rectangle is ${areaRect}`);
    }
    triangle(){
        let base = parseFloat(scanner.question("Enter the base : "));
        let height = parseFloat(scanner.question("Enter the height : "));
        let areaTri = 0.5*(base * height);
        console.log(`Area of triangle is ${areaTri}`);
    }
}

// class MyClass inheriting the parent class Area

class MyClass extends Area{
    main(){
        console.log("Enter your choice  \n1.Circle \n2.Square  \n3.Rectangle  \n4.Triangle");
        let choice = parseInt(scanner.question());

    // switch for choosing the area 

    switch(choice){
        case 1:
            this.circle();
            break;

        case 2:
            this.square();
            break;

        case 3:
            this.rectangle();
            break;

        case 4:
            this.triangle();
            break;

        default:
            console.log("Invalid choice!!!");
        }
    }
}

// creating object for the child class

let area = new MyClass();
area.main();