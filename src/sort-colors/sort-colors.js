/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (high >= mid) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))//0,0,1,1,2,2
console.log(sortColors([2, 0, 1]))//0,1,2
console.log(sortColors([1, 2, 1, 0, 2, 0]))