// program to do map

let arr = [1,2,3,4,5,6,7,8]
let result = arr.filter((num)=> num%2===0)
let prod = result.map((num)=>num*2)
let print = prod.forEach((num)=>{
    console.log(num)
})

