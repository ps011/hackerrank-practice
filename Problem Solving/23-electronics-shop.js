/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    let costs = [];
    keyboards.forEach(k => {
        drives.forEach(d => {
            costs.push(d+k);
        });
    });
    costs = costs.sort((a,b) => a - b);
    while(costs[costs.length - 1] && costs[costs.length - 1] > b) {
        
        costs.pop();
    }
    if (costs.length === 0) {
        return -1;
    } else {
        return costs[costs.length - 1];  
    }
}

console.log(getMoneySpent([40,50,60], [5,8,12], 60)); //58
console.log(getMoneySpent([3,1], [5,2,8], 10)); //9
console.log(getMoneySpent([4], [5], 5)); //9



/*


[23, 26]      [20, 24]

26 + 24 - 49 = 1    

26 - 23       24 - 20
3                4   


*/