// closure example

function test(){
    var val1 = 10 ;
    function testInner(){
        console.log(val1);
    }
    return testInner;
}
let fun = test();
fun();