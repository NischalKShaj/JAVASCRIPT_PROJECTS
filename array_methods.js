
// <========================================ARRAY METHODS======================>


// pop() delete element from the back

// let arr = [1,2,3,4,5]
// let del = arr.pop();
// console.log(del);
// console.log(arr);

// push() add element at the end

// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);
// arr.push(45)
// console.log(arr);

// shift() to remove element from the begining

// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

// unshift() to add element at the begining

// let arr = [1,2,3,4,5]
// arr.unshift(0);
// console.log(arr);

//splice for removing elements from a particular index

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.splice(2,1)
// console.table(arr);

// splice for adding element at a particular index

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(3,1,5)
// console.table(arr);

// sort ascending order

// let arr = [5,3,1,2,4];
// let s = arr.sort((a,b)=>a-b)
// console.log(s);

// sort in descending order

// let arr = [5,3,1,2,4];
// let s = arr.sort((a,b)=>b-a)
// console.log(s);


//spread operator 

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,0]

// let arr =[...arr1,...arr2]
// console.log(arr);

// rest operator

// const arr =['a'];

// function arr2(...args){
//     return [...args,...arr];
// }
// const arr3= arr2(1,2,3,4,5)
// console.log(arr3);


// flat operator 

// let arr = [1,2,3,4,5,[6,7,8,9,[3,4,5,6,[1,2,2]]]]
// let single = arr.flat(3);
// console.log(single);

// reverse()

// let arr = [1,3,5,4,2];
// let rev = arr.reverse();
// console.log(rev);