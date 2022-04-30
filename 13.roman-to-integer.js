/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {};
    obj['I'] = 1;
    obj['V'] = 5;
    obj['X'] = 10;
    obj['L'] = 50;
    obj['C'] = 100;
    obj['D'] = 500;
    obj['M'] = 1000;

    let counter = 1;
    let sum = 0;
    let stack = [obj[s[0]]];
    while(counter < s.length + 1) {
        let next = 0;
        if(counter !== s.length) next = obj[s[counter]]
        let current = stack.pop();
        if(current < next) {
            sum = sum - current
        } else {
            sum = sum + current
        }
        stack.push(next)
        counter++
    }
    return sum
};
// @lc code=end

