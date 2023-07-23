// constructor

function Car(name, model){
    this.name = name;
    this.model = model;

    // this.chase = function(){
    //     console.log("Chase number : BSA 998432")
    // }
    this.chase = () => console.log("Chase number : BSA 998432");
}

let car = new Car("Rolls Roys", "Phantom");

console.log(car)
car.chase()