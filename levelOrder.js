/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let list = [root]
  let res = []
  while (list.length) {
    let count = list.length
    let subRes = []
    while (count) {
      let node = list.shift()
      subRes.push(node.val)
      if (node.left) {list.push(node.left)}
      if (node.right) {list.push(node.right)}
      count--
    }
    res.push(subRes)
  }
  return res
};