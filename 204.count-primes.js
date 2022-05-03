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
    let seen = new Array(n).fill(false);
    let primes = 0;
    for(let i = 2; i < n; i++) {
        if(seen[i]) continue;
        primes += 1;
        for(let mult = i * i; mult < n; mult += i) {
            seen[mult] = true
        }
    }
    return primes
};
// console.log(countPrimes(10))
// // @lc code=end

