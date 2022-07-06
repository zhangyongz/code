// arr = [3,2,1], k = 2
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  function recursion (left, right, k) {
    if (right - left <= 0) {
      return
    }
    let i = left, j = right
    let temp = arr[Math.floor((i + j) / 2)]
    while (i <= j) {
      while (arr[i] < temp) {
        i++
      }
      while (arr[j] > temp) {
        j--
      }
      if (i <= j) {
        swap(i, j)
        i++
        j--
      }
    }
    console.log(i, left, k);
    let range = i  - left
    if (range === k) {
      return
    }
    if (range < k) {
      recursion(i, right, k - range)
    }
    if (range > k) {
      recursion(left, i - 1, k)
    }
  }
  function swap (i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  recursion(0, arr.length - 1, k)
  return arr.slice(0, k)
}

let arr = [0,1,2,1]
console.log(getLeastNumbers(arr, 1))
