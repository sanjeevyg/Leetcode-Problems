/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false;
    if(isSame(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSame = (p, q) => {
    let queue = [p, q];
    while(queue.length > 0) {
        let first = queue.shift();
        let second = queue.shift();
        if(first == null && second == null) continue;
        if(!first || !second || first.val != second.val) return false;
        queue.push(first.left)
        queue.push(second.left)
        queue.push(first.right)
        queue.push(second.right)
    }
    return true;
}

// console.log(isSubtree([3,4,5,1,2], [4,1,2]))
// @lc code=end

