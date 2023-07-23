// program to demonstrate try and catch

let my_Str;
try{
    my_Str = 12345;
    let rev_Str = my_Str.split().reverse().join();
    console.log(rev_Str);
}catch(error){
    console.log(error.message);
}finally{
    console.log("My srtring is of type : " + typeof(my_Str));
}