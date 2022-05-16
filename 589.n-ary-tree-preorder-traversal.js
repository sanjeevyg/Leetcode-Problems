/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
   if(root === null) return [];
   let result = [];
   result.push(root.val)

   for(let child of root.children) {
       result.push(...preorder(child))
   }
   return result
};

// @lc code=end

