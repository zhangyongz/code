// 输入：root = [5,4,6,null,null,3,7]
// 输出：false


  
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  function recursion (node, min, max) {
    if (!node) {
      return true
    }
    if (node.val >= max || node.val <= min) {
      return false
    }
    return recursion(node.left, min, node.val) && recursion(node.right, node.val, max)
  }
  return recursion(root, -Infinity, Infinity)
};