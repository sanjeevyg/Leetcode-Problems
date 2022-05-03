/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!sMap.has(s[i])) { 
            sMap.set(s[i], t[i])
        } else {
            if(sMap.get(s[i]) !== t[i]) return false
        }
    }
    return new Set([...sMap.values()]).size === sMap.size
};
// console.log(isIsomorphic("badc", "baba"))
// console.log(isIsomorphic("baba", "badc"))
// @lc code=end

