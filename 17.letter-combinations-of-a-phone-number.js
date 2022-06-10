/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == null || digits.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  
  const res = [];
  const go = (i, s) => {
    // console.log("[i, s]", [i, s])
    if (i === digits.length) {
        res.push(s);
        return;
    }

    for (const c of map[digits[i]]) {
        // console.log(s)
        go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;
    
};
// console.log(letterCombinations("23"))
// @lc code=end

