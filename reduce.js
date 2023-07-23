// program for reduction

let arr = [1,2,3,4,5]
let result = arr.filter((num) => num%2===0)
    .map((num) => num*2)
    .reduce((num1, num2) =>num1 + num2)
console.log(result);

    