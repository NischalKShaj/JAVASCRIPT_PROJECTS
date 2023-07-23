// <===============================HIGHER=ORDER=FUNCTION===================================>

// map()

// let arr = [1,2,3,4,5];

// let newarr = arr.map((value)=>value*2)

// console.log(newarr);


// filter()

// let arr = [1,2,3,4,5]
// let newarr = arr.filter((value)=>value%2===0)
// console.log(newarr);

// use map() and filter() together

// let arr =[1,2,-3,-4,5]
// let newarr = arr.map((value)=>value*2).filter((value)=>value<0)
// console.log(newarr);
 
// reduce()

// let arr = [1,2,3,4,5]
// let newval = arr.reduce((prevvalue,currvalue)=>prevvalue+currvalue)
// console.log(newval);

// map()filter() and reduse()

// let arr = [1,2,3,4,5,6,7,8,9]

// let newval = arr.map((value)=>value*2).filter((value)=>value%3===0).reduce((preval,curval)=>preval+curval)
// console.log(newval);

// forEach()

// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0;
// let newarr = arr.forEach((value)=>sum+=value)
// console.log(sum);