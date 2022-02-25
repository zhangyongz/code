function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList1 = function (head) {
  let node = head
  let arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  arr.sort(function (a, b) {
    return a - b
  })
  let res = null
  let current
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!res) {
      res = new ListNode(item)
      current = res
    } else {
      current.next = new ListNode(item)
      current = current.next
    }
  }
  return res
};

function sortList(head) {
  if (!head) {
    return null
  }
  let pre = null
  let node = head
  while (node) {
    node.pre = pre
    pre = node
    node = node.next
  }
  function recursion(start, end) {
    let temp = start.val
    let node = start.next
    if (node === end) {
      return { i: start, j: start.next }
    }
    let i = start
    let j = start
    while (node && node !== end) {
      let val = node.val
      let next = node.next
      if (node.pre) node.pre.next = node.next
      if (node.next) node.next.pre = node.pre
      if (val < temp) {
        node.next = i
        i.pre = node
        i = node
      } else {
        j.next = node
        node.pre = j
        j = node
      }
      node = next
    }
    recursion(i, start).j.next = start
    start.next = recursion(start, end).i
    return {i, j}
  }
  let { i } = recursion(head, null)
  return i
}

let params = new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(5))))
console.log(JSON.stringify(sortList(params)));