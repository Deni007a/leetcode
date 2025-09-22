/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// неоптимальное решнеи в лоб
const twoSum = function (nums, target) {
    // code
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// оптимально решение через кешировани  и хеш мап
const twoSum2 = function (nums, target) {
    // code
    const map = new Map();
    // проходим заполням мапу
    for (let i = 0; i < nums.length; i++) {
        // ищем разницу
        let dif = target - nums[i];
        // если разница есть в мапе возвращаем индексы
        if (map.has(dif)) {
            return [map.get(dif), i];
        }
        // если нет добавляем в мап
        map.set(nums[i], i);
    }

};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
