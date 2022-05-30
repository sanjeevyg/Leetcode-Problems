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
    let set = new Set();
    let maxLength = 0;
    let substrLength = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            substrLength = 0;
            set.clear()
            // set.add(s[i])
        }

        if(set.has(s[i])) {
            substrLength = 0;
            set.clear()
            continue;
        }
        set.add(s[i])
        substrLength = substrLength + 1
        // console.log("subs", substrLength)
        maxLength = Math.max(substrLength, maxLength)
    }
    return maxLength
};
// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring(" "))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("aab"))
// console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("dvdf"))
// @lc code=end

