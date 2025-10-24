/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);


    let temp = parseInt(s);
    if (Number.isNaN(temp)) return 0;
    if (temp > INT_MAX) return INT_MAX;
    if (temp < INT_MIN) return INT_MIN;

    return temp;
};


console.log(myAtoi("42")) //42
console.log(myAtoi(" -042")) //-42
console.log(myAtoi("1337c0d3")) //1337
console.log(myAtoi("  0  ")) //0
console.log(myAtoi("words and 987")) //0
console.log(myAtoi("-91283472332")) //-2147483648