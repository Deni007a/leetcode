/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
let str = x.toString();
let revStr = str.split('').reverse().join('');
return str === revStr;
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10));  //false
