/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === "") return 0;
    //Initiate a map to track the longest substring
    //Iterate through the substring and make substring and add it to map before breaking at repitition
    //Iterate through the map and return the substring with largest value
    let map = new Map();
    let count = 0;
    let set = new Set();
    let str = "";
    let max = 0;

    while(count < s.length) {
        console.log(s[count])
        if(set.has(s[count])) {
            map.set(str, max)
            set.clear()
            max = 0;
            str = "";
            continue;
        }
        if(s[count] === " ") {
            set.add(" ")
            str += " "
        } else {
            set.add(s[count])
            str += s[count]
        }
        max++
        count++
    }
    // console.log(map)

    let maxLength = Math.max(...map.values())

    return maxLength

};
console.log(lengthOfLongestSubstring("abcabcb b"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring(" "))
// @lc code=end

