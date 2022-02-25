/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let node1 = headA
    let node2 = headB
    while (node1 !== node2) { 
      if (!node1) {
        node1 = headB
      } else {
        node1 = node1.next
      }
      if (!node2) {
        node2 = headA
      } else {
        node2 = node2.next
      }
    }
    return node1
};