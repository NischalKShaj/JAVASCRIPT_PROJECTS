// function greet(user){
//     return `Heloo ${user}`
// }
// let user = "Nischal"
// let str = greet(user);
// console.log(str);


// function as an expression

// let add = function(num1, num2){
//     return num1 + num2; 
// }

// let result = add(19,29);
// console.log(result);

// local and global variables

// function add(num1, num2, num3=0){
//     console.log(num1,num2,num3);
//     return num1+num2+num3;

// }
// let result = add(5,6,12)
// console.log(result);

//  arrow function

let add = (num1, num2) =>{
    if(num1<0){
        num1 = Math.abs(num1);// to convert a negative value to positive Math.abs is used
    }else if(num2<0){
       num2 = Math.abs(num2);
    }
    return num1 + num2;
}

let result = add(5,-6);
console.log(result);