// syncronous call back


function functionTest(callback){
    console.log("Start the execution.....dont wait for anyone");
    callback();
    console.log("Your work is done you may leave....");
}

function functionCall(){
    console.log("Working on my current flow of execution......!");
}
functionTest(functionCall)