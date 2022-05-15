// [10,0,1,0,3,12]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 0
  while (j < nums.length) {
    if (nums[j] !== 0) {
      swap(i, j)
      i++
    }
    j++
  }
  function swap(left, right) {
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
  }
};