/*
 * @lc app=leetcode id=243 lang=javascript
 *
 * [243] Shortest Word Distance
 */

// @lc code=start
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let minValue = Infinity;
    let curr = "";
    let oldIndex;
    for(let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i] == word1 || wordsDict[i] == word2) {
            if(curr === wordsDict[i]) {
                curr = wordsDict[i]
                oldIndex = i;
            } else {
                if(minValue > (i - oldIndex)) minValue = (i - oldIndex)
                curr = wordsDict[i]
                oldIndex = i;
            }
        }
}
    return minValue
};
// let wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
// let word1 = "coding"
// let word2 = "practice"
// console.log(shortestDistance(wordsDict, word1, word2))
// @lc code=end

