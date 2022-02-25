// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let list = new Array(board.length).fill(0)
  list = list.map(() => {
    return new Array(board[0].length).fill(0)
  })
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item === word[0]) {
        if (recursion(i, j, 0)) { 
          return true
        }
      }
    }
  }
  function recursion (i, j, index) {
    if (i > board.length - 1 || i < 0 || j > board[i].length - 1 || j < 0) {
      return false
    }
    if (list[i][j] === 1) {
      return false
    }
    let item = board[i][j]
    if (item !== word[index]) {
      return false
    }
    if (index === word.length - 1) {
      return true
    }
    list[i][j] = 1
    index++ 
    let res = recursion(i, j + 1, index) || recursion(i + 1, j, index) || recursion(i, j - 1, index) || recursion(i - 1, j, index)
    list[i][j] = 0
    return res
  }
  return false
};

let res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')
console.log(res)