// async and await 

// function fetchData(){

//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("data fetched successfully ")
//         },3000)
//     })
// }

// async function Data(){
//     try{
//         console.log("fetching.......");
//         let data = await fetchData();
//         console.log(data);
//         console.log("finish");
//     }catch(error){
//         console.log(error);
//     }
// }
// Data();



function School(){
    return new Promise((reject)=>{
        console.log("Fetching student details.......");
        setTimeout(()=>{
            reject("student not found!!!")
        },2000)
    })
}

async function Data(){
    try{
        console.log("Checking for student.....");
        let data = await School();
        console.log(data);
    }catch(error){
        console.log(error);
    }finally{
        console.log("end");
    }
}
Data();