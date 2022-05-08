/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    let node = new TreeNode();
    node.left = root;
    node.right = null;
    let stack = [node.left];

    while(stack.length > 0) {
        let current = stack.pop();
        
        if(current.right  != null && (current.right.val < low || current.right.val > high)) {
            if(current.right != null) {
                current.right.right = null;
                stack.push(current.right)
            } else {
                current.right = null;
            }
        }
        if(current.left  != null && (current.left.val < low || current.left.val > high)) {
            if(current.left != null) {
                current.left.left = null;
                stack.push(current.left)
            } else {
                current.left = null;
            }
        }
        
    }
    return node.left
};
// @lc code=end

