//  promise working 

function functionTest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("i am late still the problem is resolved")
            reject("i cannot do it")
        },2000)
    })
}
functionTest().then((result)=>{
    console.log("sorry............",result);
}).catch((error)=>{
    console.log(error)
})