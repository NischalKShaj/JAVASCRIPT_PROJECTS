// sum of elements
const scanner = require('readline-sync')

// let arr = []

// let size = parseInt(scanner.question("Enter the size : "))
// let i,j
// console.log("Enter the array values : ");

// for( i=0;i<size;i++){
//     arr[i]=[]
//     for( j=0;j<size;j++){
//         arr[i][j] = parseInt(scanner.question(""))
//     }
// }
// for(i=0;i<size;i++){
//     for(j=0)
// }

// function Test(){
//     return new Promise((resolve)=>{
//         console.log("start");
//         setTimeout(()=>{
//             resolve("problem solved")
//         },2000)
//     })
// }
// Test().then((message)=>{
//     console.log("success",message);
// }).catch((error)=>{
//     console.log(error);
// })
// console.log("end");

// prime number

// let arr = []
// let m,flag,i,j;
// let size = parseInt(scanner.question("Enter the size"));

// console.log(("Enter the array values : "));
// for(i=0;i<size;i++){
//     arr[i] = parseInt(scanner.question(""))
// }
// for(i=0;i<size;i++){
//     flag=0;
//     m=arr[i]/2;
//     if(arr[i]<=1){
//         continue;
//     }
//     for(j=2;j<=m;j++){
//         if(arr[i]%j===0){
//             flag =1;
//             break;
//         }
      
//     }
//     if(flag===0){
//         console.log(arr[i]);
//     }
// }
 


// let arr=[];
// let i,j,flag

// let size  = parseInt(scanner.question("Enter the size"))
// console.log("Enter the arry values");
// for(i=0; i<size;i++){
//     arr[i] = parseInt(scanner.question(""))
// }

// for(i=0; i<size;i++){
//     flag=true;
    
//         for(j=i;j<size;j++){
//             if( i!==j && arr[i]===arr[j]){
               
//                     flag =false
                    
//                     break;
                
//             }
        
//         }
    

//     if(flag){
//         console.log(arr[i]);
//     }
// }

// let sl = 200;
// let l =300
// let arr =[];
// let i,j
// let size = parseInt(scanner.question("ENter the array size "))

// for(i=0;i<size;i++){
//     arr[i]=parseInt(scanner.question(""))
// }
// for(i =0;i<size;i++){
//     if(arr[i]<l){
//         sl = l;
//         l= arr[i]
//     }
//     else if(arr[i]<sl && arr[i]>l){
//         sl = arr[i];
//     }
// }
// console.log(sl);
// console.log(l);

// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("hi....")
//         },2000);
//     })
// }
// async function Sdata(){
//     try{
//         console.log("hi....");
//         let data1 = await data()
//         console.log(data1);
//     }catch{
//         console.log("error");

//     }
// } 
// Sdata()

// let obj ={
//     name :"nischal",
//     age:21,
    
// }
// obj.place = "pathanamthita"
// for( let i in obj){
//     console.log(i);
// }

// function Data(callback){
//     console.log("start");
//     callback();
//     console.log("end");
// }
// function aeea(){
//     console.log("in call back");
// }
// Data(aeea)

// function Data(callback){
//     console.log("start");
//     setTimeout(callback,2000);
//     console.log("stil in exec block");
// }
// function call(){
//     console.log("async was invoked");
// }
// Data(call)

// let sum = ((a)=>(b)=>(c)=>a+b+c)

// let result = sum(1)(2)(3)
// console.log(result);

// let n = "nischal"
// let m = n.split("")
// console.log(m);

let str = "hi who are you"
let str1 = str.split(" ")
for( let i=0;i<str1.length;i++){
    console.log(str1[i][0]);
}