// function for result

function Calc(){
    let mark = document.getElementById("result").value;
    if(mark >= 50 && mark<=100){
        document.write("Passed");
    }else if(mark>100){

    document.write("Enter a valid mark")
    }else{
        document.write("Failed");
    }
}