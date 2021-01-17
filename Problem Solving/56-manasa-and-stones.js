// Complete the stones function below.
function stones(n, a, b) {
const res = [];
for(let i = 0; i < n; i++) {
    let sum = (a*i) + (b*((n-1)-i));
    if(res.indexOf(sum) === -1)
        res.push(sum);
}
return res.sort((a,b) => a-b);
}

// let res = []
//   n= n-1
//   for (let i = 0; i <= n; i++){
//     let num = (a * i) + (b * (n - i))
//     if(!res.includes(num)) res.push(num)
//   }
//   res=res.sort((a,b) => a-b)
//   return res

console.log(stones(2,2,3));
console.log(stones(4,10,100));