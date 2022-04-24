/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let arr = []
  arr[0] = 1
  for (let i = 1; i < nums.length; i++) {
    const item = nums[i]
    arr[i] =  arr[i - 1] * nums[i - 1]
  }
  let p = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    const item = nums[i]
    arr[i] = arr[i] * p
    p *= nums[i]
  }
  return arr
};

console.log(productExceptSelf([1,2,3,4]));