// program for filtering of even number

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let filt = arr.filter((num) =>num%2===0)
// filt.forEach((num) =>{
//     console.log(num);
// })

// program to filter prime number


let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let prime = arr.filter((num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
});

prime.forEach((num) => {
  console.log(num);
});
