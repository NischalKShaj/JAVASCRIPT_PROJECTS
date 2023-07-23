// function for getting the multiplication table

function multi(){
    let num = parseInt(document.getElementById("mul").value,10);

    for(let i=1;i<=10;i++){
        let prod = i*num;
        console.log(i+"x"+num+"="+prod);
    }
}