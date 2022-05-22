/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let sum = 0;

    const status = (str, charObj) => {
        for(let i = 0; i < str.length; i++) {
            let j = str[i]
            if(!charObj[j] || charObj[j] == 0) {
                return false;
            }
            charObj[j]--
        }
        return true;
    }

    const createObj = (str) => {
        let obj = {};
        for (let i = 0; i < str.length; i++) {
            obj[str[i]] = obj[str[i]] + 1 || 1;
        }
        return obj
    }

    for(let word of words) {
        let charObj = createObj(chars)
        if(status(word, charObj)) sum += word.length
    }
    return sum
};


// console.log(countCharacters(["bt"], "atach"))
// console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
// console.log(countCharacters(["tree"], "atach"))
// console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))
// console.log(countCharacters(["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"], "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"))
// // @lc code=end

