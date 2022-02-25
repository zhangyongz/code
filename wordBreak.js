// s = "leetcode", wordDict = ["leet", "code"]

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  function recursion(str) {
    for (let i = 0; i < wordDict.length; i++) {
      const item = wordDict[i];
      if (str.slice(0, item.length) === item) {
        if (item.length === str.length) {
          return true
        } else {
          if (recursion(str.slice(item.length))) {
            return true
          }
        }
      }
    }
    return false
  }
  return recursion(s)
};