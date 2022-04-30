/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false
    let stack = [s[0]];
    let match = ["()", "{}", "[]"]
    let count = 1;

    while(count < s.length) {
       let str = stack[stack.length - 1] + s[count] 
       if(match.includes(str)) {
           stack.pop()
       } else {
           stack.push(s[count])
       }
       count++
    }
    return stack.length === 0 
};

// @lc code=end

