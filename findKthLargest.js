// [3,2,3,1,2,4,5,5,6] k = 4
// 4
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function recursion(left, right, count) {
    if (left === right) {
      return nums[left]
    }
    let index = partition(left, right)
    if (index >= count) {
      return recursion(left, index - 1, count)
    } else {
      return recursion(index, right, count)
    }
  }
  function partition(i, j) {
    let left = i
    let right = j
    let index = Math.floor((i + j) / 2)
    let pivot = nums[index]
    while(i <= j) {
      while(i <= right && nums[i] > pivot) {
        i++
      }
      while (j >= left && nums[j] < pivot) {
        j--
      }
      if (i <= j) {
        swap(i, j)
        i++
        j--
      }
    }
    return i
  }
  function swap(i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  return recursion(0, nums.length - 1, k)
};