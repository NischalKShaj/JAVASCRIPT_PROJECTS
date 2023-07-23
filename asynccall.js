// asyncronous callback

function functionTest(callback){
    console.log("Lets start our work.....");
    setTimeout(callback,3000);
    console.log("I will be late");
}
function functionCall(){
    console.log("You are fired bcoz your are late");
}
functionTest(functionCall)