/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length - 1, c = matrix[0].length - 1
    let i = 0, j = c
    while(i <= r && j >= 0) {
      const item = matrix[i][j]
      if (item === target) {
        return true
      }
      if (item > target) {
        j -= 1
      }
      if (item < target) {
        i += 1
      }
    }
    return false
};