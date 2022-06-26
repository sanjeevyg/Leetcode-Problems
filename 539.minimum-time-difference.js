/*
 * @lc app=leetcode id=539 lang=javascript
 *
 * [539] Minimum Time Difference
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let convert = (hrs) => {
        if(hrs === "00:00") return 24*60
		let min = parseInt(hrs.substring(0, 2))*60 + parseInt(hrs.substring(3))
        return min
	}

	let ar = timePoints.map(hrs => convert(hrs)).sort((a, b) => a - b)

    let calculate = (time1, time2) => {
        let num = Math.abs(time1 - time2)
        if(num >= 12*60) num = 24*60 - num
        return num
    }

    let min = calculate(ar[0], ar[ar.length - 1])

    for(let i = 0; i < ar.length - 1; i++) {
        let diff = calculate(ar[i], ar[i + 1])
        min = Math.min(diff, min)
    }

    return min 
};

// console.log(findMinDifference(["23:59", "00:00"]))
// console.log(findMinDifference(["00:00", "23:59", "00:00"]))
// @lc code=end

