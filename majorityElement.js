/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = map.get(nums[i])
    num = num ? num + 1 : 1
    if (num > len / 2) {
      return nums[i]
    }
    map.set(nums[i], num)
  }
};

// [1,1,1,3,3,2,2,2]
// [1,2]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

};