//  pattern for numbers

let k=1;
for(let i=1; i<=4;i++){
    let row = "";
    for(let j=1; j<=4; j++){
        if(j<=i){
            row += k + " ";
            k++;
        }
       
    }
    console.log(row);
   
}
