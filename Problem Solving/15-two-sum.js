var twoSum = function(nums, target) {
    const compliments = [];    
    for (let i = 0; i < nums.length; i++) {
        console.log(compliments);
        if (compliments.indexOf(nums[i]) > 0) {
            return [compliments.indexOf(nums[i]), i];
        } else {
            compliments.push([target - nums[i], i]);
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9))