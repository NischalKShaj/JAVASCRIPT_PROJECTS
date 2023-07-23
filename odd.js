// function for finding the odd number sum

function Sum(){
    let limit = parseInt(document.getElementById("sum").value,10);
    let sum=0;
    for(let i=0;i<limit;i++){
        if(i%2!=0){
            sum = sum+i;
        }
    }
    console.log("Sum of odd numbers = "+sum);
}