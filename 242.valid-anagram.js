/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {};

    for(let letter of s) {
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }

    for(let ele of t) {
        if(!obj[ele]) {
            return false
        } else {
            obj[ele]--
        }
    }
    return true;
};
// @lc code=end

