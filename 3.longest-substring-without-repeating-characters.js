/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
   let history = {};
   let start = 0;
   let max = 0;

   for(let end = 0; end < s.length; end++) {
       let char = s[end];
       let index = history[char];
       if(index !== undefined && index >= start) {
           start = index + 1;
       }
       max = Math.max(max, end - start + 1);
       history[char] = end;
   }
   return max;
};
// console.log(lengthOfLongestSubstring("abcabcbb")) //3
// console.log(lengthOfLongestSubstring("")) //0
// console.log(lengthOfLongestSubstring(" ")) //1
// console.log(lengthOfLongestSubstring("pwwkew")) //3
// console.log(lengthOfLongestSubstring("aab")) //2
// console.log(lengthOfLongestSubstring("bbbbb")) //1
// console.log(lengthOfLongestSubstring("dvdf")) //3
// @lc code=end

