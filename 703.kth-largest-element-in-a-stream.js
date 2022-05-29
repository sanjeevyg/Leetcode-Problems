/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    let set = new Set([k, nums])
    return set
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.set.add(val)
    return set
};

let newSet = KthLargest(3, [4, 5, 8, 2])
newSet.add(3)
console.log(newSet)


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

