/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let node = head
  let pre = null
  while(node) {
    let next = node.next
    node.next = pre
    pre = node
    node = next
  }
  return pre
};

var reverseList = function(head) {
  if (!head) {
    return null
  }
  function recursion (pre, cur) {
    let node = cur.next
    cur.next = pre
    if (!node) {
      return cur
    }
    return recursion(cur, node)
  }
  return recursion(null, head)
};