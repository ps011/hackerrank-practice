/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = [];
    candies.forEach(candy => {
        if (parseInt(candy)+parseInt(extraCandies) >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    })
    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3))