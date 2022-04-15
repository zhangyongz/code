/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let res
  function dfs (node) {
    if (!node) {
      return false
    }
    let lson = dfs(node.left)
    let rson = dfs(node.right)
    if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) {
      res = node
    }
    if (node.val == p.val || node.val === q.val) {
      return true
    } else {
      return lson || rson
    }
  }
  dfs(root)
  return res
};