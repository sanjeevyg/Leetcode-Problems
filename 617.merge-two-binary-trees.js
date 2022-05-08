/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start
/* *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(root1 == null && root2 == null) return null;
    if(root1 == null) return root2;
    if(root2 == null) return root1;

    let stack = [root1, root2]

    while(stack.length > 0) {
        let first = stack.pop();
        let second = stack.pop();

        second.val += first.val

        if(first === null && second === null) continue;

        if(first.left && second.left) {
            stack.push(second.left)
            stack.push(first.left)
        }
        if(first.left && !second.left) second.left = first.left;

        if(first.right && second.right) {
            stack.push(second.right)
            stack.push(first.right)
        }
        if(first.right && !second.right) second.right = first.right;
    }
    return root1;
};
// @lc code=end

