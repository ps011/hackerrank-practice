// // Complete the saveThePrisoner function below.
// function saveThePrisoner(n, m, s) {
//   m = m > n ? m % n : m;
//   return s + m - 1 > n ? s + m - n - 1 : s + m - 1;
// }

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    return (s+m-2)%n+1;
  }

console.log(saveThePrisoner(5,2,1)); //2
console.log(saveThePrisoner(7,19,2)); //6
console.log(saveThePrisoner(3,7,3)); //3
console.log(saveThePrisoner(654809340,204894365,472730208)) //22815232
console.log(saveThePrisoner(3, 394274638, 3)) //3