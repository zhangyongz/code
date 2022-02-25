function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1, left, right)

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let list = []
  function recursion(node) {
    if (!node) {
      return
    }
    list.push(node)
    recursion(node.left)
    recursion(node.right)
  }
  recursion(root)
  let pre = list[0] || null
  for (let i = 1; i < list.length; i++) {
    const item = list[i];
    pre.left = null
    pre.right = item
    pre = pre.right
  }
};

flatten(root)