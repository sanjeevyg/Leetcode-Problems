/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function() {
    this.elements = [];
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
    this.elements.push([val, this.elements.length === 0 ? val : Math.min(val, this.getMin())])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

