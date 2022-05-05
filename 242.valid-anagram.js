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
   let count = {};

   for(let c of s) {
       count[c] ? count[c] = count[c] + 1 : count[c] = 1;
   }

   for(let c of t) {
       if(!count[c]) return false;
       count[c]--;
   }

   return true;
};

// @lc code=end

