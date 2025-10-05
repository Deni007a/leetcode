/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Дан целочисленный массив nums, возвращаться true если какое-либо значение встречается хотя бы дважды ,
// и вернуть в массиве false если каждый элемент различен.


    // просто вло
export const containsDuplicate = function (nums) {
        return new Set(nums).size !== nums.length;
    };


// через сортировку
export const containsDuplicate2 = function (nums) {
    //Сортировка упрощает обнаружение дубликатов, поскольку если таковые имеются,
    // они будут располагаться рядом.
    nums.sort((a, b) => a - b);
    // если преведущее число и следующее одинаково то true
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};


