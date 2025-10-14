/**
 * @param {string} s
 * @return {string}
 */


// тупой перебор
const longestPalindrome = function (s) {
    let max = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.slice(i, j);
            const reversed = substr.split("").reverse().join("");
            if (substr === reversed && substr.length > max.length) {
                max = substr;
            }
        }
    }

    return max;

};
const longestPalindrome2 = function (s) {
    if (!s || s.length < 1) return "";


    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return right - left - 1;

    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);     // центр в одном символе
        const len2 = expandAroundCenter(i, i + 1); // центр между двумя символами
        const len = Math.max(len1, len2);

        if (len > (end - start)) {
            // смешение (len - 1) для  случаев expandAroundCenter(i, i + 1);
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};


console.log(longestPalindrome("babad")) //"aba
console.log(longestPalindrome2("cbbd")) //"bb"

