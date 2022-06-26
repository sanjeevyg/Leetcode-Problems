/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++) {
        map[s[i]] =  ++map[s[i]] || 1
    } 

    for(let key in map) {
        if(map[key] === 1) return s.indexOf(key)
    }
    return -1
};

// console.log(firstUniqChar("leetcode"))
// @lc code=end

