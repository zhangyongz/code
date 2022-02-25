// [2,3,-2,4]
// 6

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = nums[0]
  let max = nums[0]
  let res = max
  for (let i = 1; i < nums.length; i++) {
    let mx = max, mn = min;
    min = Math.min(mn * nums[i], Math.min(mx * nums[i], nums[i]))
    max = Math.max(mn * nums[i], Math.max(mx * nums[i], nums[i]))
    res = Math.max(res, max)
  }
  return res
};

class Solution {
  public int maxProduct(int[] nums) {
      int maxF = nums[0], minF = nums[0], ans = nums[0];
      int length = nums.length;
      for (int i = 1; i < length; ++i) {
          int mx = maxF, mn = minF;
          maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
          minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
          ans = Math.max(maxF, ans);
      }
      return ans;
  }
}
