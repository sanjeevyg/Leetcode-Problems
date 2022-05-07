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
let resultNode = new TreeNode()
var mergeTrees = function(root1, root2) {
    if(root1 == null && root2 == null) return null;
    if(root1 == null) return root2;
    if(root2 == null) return root1;
    resultNode.val = root1.val + root2.val
    resultNode.left = mergeTrees(root1.left + root2.left) 
    resultNode.right = mergeTrees(root1.right + root2.right) 
    return resultNode;
};
// console.log(mergeTrees([1,3,2,5],[2,1,3,null,4,null,7]))
// @lc code=end

