/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// изменненый аналого задачи remove-duplicates-from-sorted-array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*
Пошагово для [3,2,2,3], val=3
- Старт: nums = [3,2,2,3], i=0
- j=0: nums[0]=3 -> это val, пропускаем
- j=1: nums[1]=2 != 3 → записываем в nums[0] -> nums = [2,2,2,3], i=1
- j=2: nums[2]=2 != 3 → записываем в nums[1] -> nums = [2,2,2,3], i=2
- j=3: nums[3]=3 -> это val, пропускаем
Итог: i=2, значит k=2, массив стал [2,2,2,3].

 */


const removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    console.log(nums)
    return i;


};


console.log(removeElement([3, 2, 2, 3], 3)) //Output: 2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) //Output: 5, nums = [0,1,4,0,3,_,_,_]
