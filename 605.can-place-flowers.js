/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let current = 0; let size = flowerbed.length;

    for(let i = 0; i <= size; i++) {
        if(flowerbed[i] === 0 && i < size) {
            current++
            if(i === 0) current++;
            if(i === size - 1) current++;
        } else {
            n -= Math.trunc((current - 1)/2)
            if(n <= 0) return true;
            current = 0;
        }
    } 
    return false;
};

// @lc code=end

