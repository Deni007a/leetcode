/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// встроенным методом
const strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};

// алгоритмом
const strStr2 = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            // пока символы совпадают и не вышли за needle
            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }
            // если дошли до конца needle — значит нашли совпадение
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;

};


console.log(strStr2("sadbutsad", "sad")) //0
console.log(strStr2("leetcode", "leeto")) //-1
console.log(strStr2("leetcode", "code")) //4