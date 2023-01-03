let n = 1

function powersOfTwo(n) {

//   let result = [];

//   for(let i = 0; i <= n; i++) {
//     result.push(2**i);
//   }
 
//   return result;

return [...Array(n+1)].map((x, y) => Math.pow(2, y));  
} 

console.log(powersOfTwo(n));
