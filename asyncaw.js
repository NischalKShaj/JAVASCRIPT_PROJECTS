// async await in js

function Data(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("test success");
        },2000)
    })
}

async function test(){
    try{
        let data = await Data();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

test();