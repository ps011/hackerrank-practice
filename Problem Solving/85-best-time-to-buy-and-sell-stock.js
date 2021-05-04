/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i+1] - min > profit) {
            profit = prices[i+1] - min;
        }
    }
    return profit;
};


console.log(maxProfit([7,1,5,3,6,4])); // 5