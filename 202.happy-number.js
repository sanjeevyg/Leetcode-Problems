/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}
var isHappy = function(n, visited = new Set()) {
    if(n === 1) return true;
    if(visited.has(n)) return false
    visited.add(n)

    let str = String(n)
    let sum = 0;
    
    for(let i =0; i < str.length; i++) {
        sum += squares[str[i]]
    }
    return isHappy(sum, visited)
}

// @lc code=end
