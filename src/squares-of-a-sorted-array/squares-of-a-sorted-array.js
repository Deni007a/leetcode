/**
 * @param {number[]} nums
 * @return {number[]}
 */

//два указателя
const sortedSquares = function (n) {

    let left = 0;
    let right = n.length - 1;

    let result = [];
    let index = n.length - 1;
    while (left <= right) {
        if (n[left] ** 2 > n[right] ** 2) {
            result[index] = n[left] ** 2;
            left++;
        } else {
            result[index] = n[right] ** 2;
            right--;
        }
        index--;
    }
    return result;
};
console.log(sortedSquares([-4, -1, 0, 3, 10])) //0,1,9,16,100
console.log(sortedSquares([-7, -3, 2, 3, 11])) //4,9,9,49,121
