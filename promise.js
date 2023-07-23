// example of promises 
const scanner = require('readline-sync')

let phno = scanner.question("Enter the mobile number : ");

if(phno.length==10){
    let hospital = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Booking successful")
            
        },2000);
    })
    hospital.then(function(message){
        console.log(message);
    })
}else{
        let hospital = new Promise((reject)=>{
        setTimeout(()=>{
            reject("try again!!")
            
        },2000)
    })
    hospital.catch(function(error){
        console.log(error);
    })
}



