/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const AB = new Map();
    for (let a of nums1) {
        for (let b of nums2) {
            AB.set(a+b, (AB.get(a+b) || 0) + 1)
        }
    }
    console.log(AB)
    let count = 0;
    for (let c of nums3) {
        for (let d of nums4) {
            if (AB.has(- c - d)) count += AB.get(-c -d)
        }
    }
    return count;
};

console.log(fourSumCount([1,2], [-2,-1], [-1, 2], [0,2]))

/**

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

 */