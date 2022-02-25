/**
 * @param {number} capacity
 */
 var LRUCache = function (capacity) {
  this.obj = {}
  this.first = {
    next: null
  }
  this.last = {
    pre: null
  }
  this.first.next = this.last
  this.last.pre = this.first
  this.length = 0
  this.maxLength = capacity
};

function moveToEnd(item) {
  item.pre.next = item.next
  item.next.pre = item.pre
  item.pre = this.last.pre
  item.next = this.last
  this.last.pre.next = item
  this.last.pre = item
}

function addToEnd (item) {
  item.pre = this.last.pre
  this.last.pre.next = item
  this.last.pre = item
  item.next = this.last
}

function removeHead () {
  let headItem = this.first.next
  this.first.next = headItem.next
  headItem.next.pre = this.first
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let obj = this.obj
  let item = obj[key]
  if (item !== undefined) {
    moveToEnd.call(this, item)
    return item.value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let obj = this.obj
  let arr = this.arr
  let item = obj[key]
  if (item) {
    item.value = value
    moveToEnd.call(this, item)
    return
  }
  item = {
    pre: null,
    next: null,
    key,
    value
  }
  this.obj[key] = item
  addToEnd.call(this, item)
  this.length++
  if (this.length > this.maxLength) {
    this.obj[this.first.next.key] = undefined
    this.length--
    removeHead.call(this)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.arr = []
  this.length = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let arr = this.arr
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(item);
    if (item[key] !== undefined) {
      let current = arr.splice(i, 1)
      arr.push(current[0])
      return item[key]
    }                                                            
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.arr.length < this.length) {
    this.arr.push({
      [key]: value
    })
    return
  }
  let arr = this.arr
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item[key] !== undefined) {
      item[key] = value
      let current = arr.splice(i, 1)
      arr.push(current)
      return
    }                                                        
  }
  arr.push({
    [key]: value
  })
  arr.shift()
};