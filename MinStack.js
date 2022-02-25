var MinStack = function() {
  this.min = undefined
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  const length = this.stack.length
  let min = Infinity
  if (length !== 0) {
    min = this.stack[length - 1].min
  }
  min = min > val ? val : min
  this.stack.push({
    val,
    min
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const length = this.stack.length
  if (length === 0) {
    return null
  }
  return this.stack[length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const length = this.stack.length
  if (length === 0) {
    return null
  }
  return this.stack[length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */