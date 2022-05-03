/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let stack = [root];
    while(stack.length) {
        let current = stack.pop();
        if(current != null) {
            let temp = current.left;
            current.left = current.right;
            current.right = temp;
            stack.push(current.right);
            stack.push(current.left);
        }
    }
    return root
};

// console.log(invertTree([2,1,3])) 
// console.log(invertTree([]))
// @lc code=end

