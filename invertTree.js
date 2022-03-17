// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function recursion(node) {
    if (!node) {
      return null
    }
    let temp = node.left
    node.left = recursion(node.right)
    node.right = recursion(temp)
    return node
  }
  return recursion(root)
};