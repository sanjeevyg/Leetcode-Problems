/*
 * @lc app=leetcode id=809 lang=javascript
 *
 * [809] Expressive Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    let ans = 0;

    const count = (str, i) => {
        let start = i;
        let count = 0;
        while(str[start] === str[i]) {
            start++
            count++
        }
        return count
    }

    const isStretchy = (word) => {
        let i = 0;
        let j = 0;

        while(i < word.length && j < s.length) {
            if(word[i] !== s[j]) return false

            let countW = count(word, i)
            let countS = count(s, j)

            if(countW > countS || countW < countS && countS < 3) return false;

            i += countW
            j += countS
        }
        return i === word.length && j === s.length
    } 

    for(let word of words) {
        if(isStretchy(word)) ans++
    }
    return ans
};

// let s = "heeellooo", words = ["hello"]

// console.log(expressiveWords(s, words))
// @lc code=end

