/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    return Math.min(Math.floor(p/2), Math.floor(n/2) - Math.floor(p/2));
}

console.log(pageCount(6, 2)); //1
console.log(pageCount(15603, 6957)); // 3478
console.log(pageCount(5, 5)); // 0
console.log(pageCount(6, 5)); // 1


/*

Page number = (2t) and (2t+1) 
where t = number of turns from front

Total Pages - Page Number = (2t) and (2t+1)
where t = number of turns from front

*/