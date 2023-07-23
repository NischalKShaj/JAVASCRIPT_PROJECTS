// function for calculating simple interest

function myFunction(){

    let principle = document.getElementById("principle_amount").value
    let rate = document.getElementById("rate").value
    let year = document.getElementById("year").value
    let si = (principle*rate*year)/100;

    console.log(si);
}