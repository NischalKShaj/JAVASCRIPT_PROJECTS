// function to give the garde
function Grade(){
    let mark = document.getElementById("grade").value;
    if(mark>90){
        console.log("Your grade is : A");
    }else if(mark>=80 && mark<=89){
        console.log("Your grade is : B");
    }else if(mark>=70 && mark<=79){
        console.log("Your grade is : C");
    }else if(mark>=60 && mark<=69){
        console.log("Your grade is : D");
    }else if(mark>50 && mark<=59){
        console.log("Your grade is : E");
    }else{
        console.log("Failed");
    }
}