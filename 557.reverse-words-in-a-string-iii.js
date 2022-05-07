/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = s.split(" ")
    const result = ans.map(word => word.split("").reverse().join(""))
    return result.join(" ")
};

// console.log(reverseWords("Let's take LeetCode contest"))
// @lc code=end

