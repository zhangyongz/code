// 输入：m = 3, n = 2
// 输出：3
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let arr = new Array(m).fill(0)
  arr = arr.map(function () {
    return new Array(n).fill(0)
  })
  for (let i = 0; i < m; i++) {
    arr[i][n - 1] = 1
  }
  for (let j = 0; j < n; j++) {
    arr[m - 1][j] = 1
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      arr[i][j] = arr[i + 1][j] + arr[i][j + 1]
    }
  }
  return arr[0][0]
};