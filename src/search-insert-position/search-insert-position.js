/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let leg = nums.length;
    for (let i = 0; i < leg; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
    }
    return leg;
};


console.log(searchInsert([1, 3, 5, 6], 5)) //2
console.log(searchInsert([1, 3, 5, 6], 2))//1
console.log(searchInsert([1, 3, 5, 6], 7))//4
