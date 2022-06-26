/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let ans = ""

    let condition = (word) => {
        let pos = -1;
        for(let char of word) {
            pos = s.indexOf(char, pos + 1)
            if(pos === -1) return false;
        }
        return true
    }

    for(let word of dictionary) {
        let a = word.length, b = ans.length
        if(b > a || (b === a && word > ans)) continue;
        if(condition(word)) ans = word
    }

    return ans
};
// @lc code=end

