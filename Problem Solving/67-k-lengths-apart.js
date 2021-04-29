/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var kLengthApart = function(nums, k) {
    let counter = 0;
   const firstOne = nums.indexOf(1)
   for (let i = firstOne; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (counter < k && i !== firstOne)
                return false;
            else 
                counter = 0;
        } else {
            counter++;
        }
    }
    return true;
};

console.log(kLengthApart([0,1, 0,0,1,0,0,1], 2))