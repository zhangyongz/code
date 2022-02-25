// Input: preorder = [3, 9, 10, 11, 20, 15, 7], inorder = [10, 9, 11, 3, 15, 20, 7]
// Output: [3,9,20,null,null,15,7]

// [1, 2] [1, 2]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function recursion (preorder, inorder) {
    if (preorder.length === 1) {
      return new TreeNode(preorder[0])
    }
    if (preorder.length === 0) {
      return null
    }
    let val = preorder[0]
    let index = inorder.indexOf(val)
    let lArr = inorder.slice(0, index)
    let rArr = inorder.slice(index + 1)
    let prelArr = preorder.slice(1, index + 1)
    let prerArr = preorder.slice(index + 1)
    let left = recursion(prelArr, lArr)
    let right = recursion(prerArr, rArr)
    return new TreeNode(val, left, right)
  }
  return recursion(preorder, inorder)
};

buildTree([3,9,20,15,7], [9,3,15,20,7])

//     3
//   /   \
//  9     20
//       /  \
//      15   7