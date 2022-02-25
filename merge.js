// intervals = [[1,3],[2,6],[8,10],[15,18]]
// [[1,6],[8,10],[15,18]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = []
  let start = -1
  let end = -1
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })
  for (let i = 0; i < intervals.length; i++) {
    let item = intervals[i]
    let itemStart = item[0]
    let itemEnd = item[1]
    if (itemStart > end && itemEnd > end) {
      if (i !== 0) {
        res.push([start, end])
      }
      start = itemStart
      end = itemEnd
    } else if (itemEnd > end) {
      end = itemEnd
    }
  }
  res.push([start, end])
  return res
};