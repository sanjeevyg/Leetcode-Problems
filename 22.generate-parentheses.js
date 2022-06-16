/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const go = (l, r, s ) => { // l: left remaining, r: right remaining
    if (l > r) return; // Validate by the number of '(' should be always >= ')'


    if (l === 0 && r === 0) {
        res.push(s);
        // console.log("f", s, count)
      return;
    }
    // count++

    if (l > 0) go(l - 1, r, s + '(');
    // console.log("l", s, count)
    if (r > 0) go(l, r - 1, s + ')');
    // console.log("r", s, count)
  };

  go(n, n, '');
  return res;

};


// console.log(generateParenthesis(3))
// @lc code=end

