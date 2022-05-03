/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let seen = {}, ans = 0
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue
        ans++
        for (let mult = num * num; mult < n; mult += num)
            seen[mult] = 1
    }
    return ans
};

// console.log(countPrimes(10))
// @lc code=end

