/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let checkOne = [...nums];
    let checkTwo = [...nums];
    let counterOne = 1;
    let counterTwo = 1;
    
    for(let i = 0; i < checkOne.length; i++) {
        if(checkOne[i] > checkOne[i + 1]) {
            if(counterOne > 1) break;
            checkOne.splice(i, 1)
            counterOne++
        }
    }

    for(let i = 0; i < checkTwo.length; i++) {
        if(checkTwo[i] > checkTwo[i + 1]) {
            if(counterTwo > 1) break;
            checkTwo.splice(i + 1, 1)
            counterTwo++
        }
    }

    let caseOne = true;
    let caseTwo = true;
    
    for(let i = 0; i < checkOne.length; i++) {
        if(checkOne[i] > checkOne[i + 1]) {
            caseOne = false;
            break;
        }
    }

    for(let i = 0; i < checkTwo.length; i++) {
        if(checkTwo[i] > checkTwo[i + 1]) {
            caseTwo = false
            break;
        }
    }

    return caseOne || caseTwo
};

// console.log(checkPossibility([4, 2, 3]))
// console.log(checkPossibility([4, 2, 1]))
// console.log(checkPossibility([3, 4, 2, 3]))
// console.log(checkPossibility([-1, 4, 2, 3]))
// console.log(checkPossibility([5, 7, 1, 8]))
// console.log(checkPossibility([1,5,4,6,7,10,8,9]))
// @lc code=end

