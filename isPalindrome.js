/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
 let slow = head, fast = head
 let pre = null
 while(fast && fast.next) {
   let cur = slow
   slow = slow.next
   fast = fast.next.next
   cur.next = pre
   pre = cur
 }
 if (fast) {
  slow = slow.next
 }
 while(pre) {
   if (pre.val !== slow.val) {
    return false
   }
   pre = pre.next
   slow = slow.next
 }
 return true
};