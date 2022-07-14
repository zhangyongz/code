/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) {
    return []
  }
  function findMax(i, j) {
    let max = -Infinity
    while (i <= j) {
      const item = nums[i]
      max = Math.max(max, item)
      i++
    }
    return max
  }
  let i = 0, j = k - 1
  let max
  let res = []
  while (j < nums.length) {
    if (max === undefined || nums[i - 1] === max) {
      res.push(findMax(i, j))
    } else if (nums[j] > max) {
      res.push(nums[j])
    } else {
      res.push(max)
    }
    i++
    j++
  }
  return res
};