// this is an example of closure

function num(x){
    function num2(y){
        return x*y
    }
    return num2
}
let number = num(2)
console.log(number(2));