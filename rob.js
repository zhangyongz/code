// [1,2,3,1]
// 4

// [2,7,9,3,1]
// 12

// [1,3,1]
// 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }
  for (let i = 2; i < nums.length; i++) {
    const item = nums[i];
    let pre3 = nums[i - 3] !== undefined ? nums[i - 3] : -Infinity
    let pre2 = nums[i - 2]
    nums[i] += pre3 < pre2 ? pre2 : pre3
  }
  let l = nums.length - 1
  return Math.max(nums[l - 1], nums[l])
};