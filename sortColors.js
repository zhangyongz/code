/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === 0) {
      let item = nums.splice(i, 1)
      nums.unshift(item)
    } 
    if (nums[i] === 2) {
      let item = nums.splice(i, 1)
      nums.push(item)
      i--
    }
    i++
  }
  return nums
};