// grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]

// 输入：grid = [
//   ["1","0","1","1","0"],
//   ["1","1","1","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  function isArea(r, c) {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length
  }

  function dfs(i, j) {
    if (!isArea(i, j)) {
      return
    }
    if (grid[i][j] !== '1') {
      return
    }
    grid[i][j] = '2'
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i + 1, j)
    dfs(i, j - 1)
  }

  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const item = grid[i][j];
      if (item === '1') {
        dfs(i, j)
        res++
      }
    }
  }
  return res
};