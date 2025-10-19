/**
 * найти самою длинную последовательность порядок цифр неважен
 * @param {number[]} nums
 * @return {number}
 */


// const longestConsecutive = function (nums) {
//     const set = new Set(nums);
//     let size = 0;
//     let oldSize = 0;
//
//
//     const min = Math.min(...set);
//     const max = Math.max(...set);
//
//     let curent = min;
//     while (curent <= max) {
//         if (set.has(curent)) {
//             size++;
//         }
//         else {
//             if (oldSize < size) {
//                 oldSize = size;
//             }
//             size = 0;
//         }
//
//         curent++;
//     }
//
//     return Math.max(size,oldSize);
// };

export const longestConsecutive = function (nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (const number of set) {
        // если set.has(number - 1) то это не начало последовательности есть число меньше number
        if (!set.has(number - 1)) {
            let current = number;
            let currentSize = 1;

            //проверяем есть ли число больше number
            while (set.has(current + 1)) {
                current++;
                currentSize++;
            }
            maxLength = Math.max(maxLength, currentSize);
        }
    }
    return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
console.log(longestConsecutive([1, 0, 1, 2])); //3

