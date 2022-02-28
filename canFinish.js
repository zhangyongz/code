// numCourses = 2, prerequisites = [[1,0]]
// numCourses = 2, prerequisites = [[1,0],[0,1]]

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses)
  inDegree.fill(0)
  let map = {}
  for (let i = 0; i < prerequisites.length; i++) {
    let item = prerequisites[i]
    inDegree[item[0]] += 1
    if (!map[item[1]]) {
      map[item[1]] = [item[0]]
    } else {
      map[item[1]].push(item[0])
    }
  }
  let queue = []
  for (let i = 0; i < inDegree.length; i++) {
    const item = inDegree[i];
    if (item === 0) {
      queue.push(i)
    }
  }
  while (queue.length) {
    let item = queue.shift()
    numCourses--
    let curList = map[item]
    if(curList) {
      for (let i = 0; i < curList.length; i++) {
        const element = curList[i];
        inDegree[element]--
        if (inDegree[element] === 0) {
          queue.push(element)
        }
      }
    }
  }
  return numCourses === 0
};