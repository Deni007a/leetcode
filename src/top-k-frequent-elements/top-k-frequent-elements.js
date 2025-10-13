/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = function (nums, k) {
    const freq = {};

    // Подсчёт частот
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Сортировка по убыванию частоты
    const sorted = Object.entries(freq)
        .sort((a, b) => b[1] - a[1]) // сортируем по частоте
        .map(([num]) => Number(num)); // берём только число

    return sorted.slice(0, k);

};

console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)) //[2,-1]