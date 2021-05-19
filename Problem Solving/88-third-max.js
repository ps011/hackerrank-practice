/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    nums = Array.from( new Set(nums.sort((a, b) => a - b)));
    console.log(nums);
    return nums.length >= 3 ? nums[nums.length - 3] : nums[nums.length - 1]
};


console.log(thirdMax([3,3,4,3,4,3,0,3,3]));