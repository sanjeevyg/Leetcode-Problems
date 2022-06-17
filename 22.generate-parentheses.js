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
    
    let go = (open, close, s) => {
        console.log(open, close)
        console.log("final", s)
        if(open == close && close == n) {
            res.push(s);
            return;
        }

        if(open < n) {  //6
            go(open + 1, close, s + "(")
            console.log("open", open, close)
            console.log("left executed", ["s", s])
        }
        
        if(close < open) {
            console.log("right executed", ["s", s])
            go(open, close + 1, s + ")")
        }
    }

    go(0, 0, "")
    return res
};


console.log(generateParenthesis(3))
// @lc code=end

