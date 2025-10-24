/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// тупой метод
function threeSum(nums) {
    const result = [];
    const seen = new Set();
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    const key = triplet.join(',');
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }

    return result;
}

function threeSum2(nums) {
    const result = [];
    // сортирум для удобства
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; // Указатель на следующий элемент после i
        let right = nums.length - 1; // Указатель на последний элемент массива

        // Пропускаем повторяющиеся значения на позиции i, чтобы не было одинаковых троек
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Пока указатели не пересеклись
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]; // Считаем сумму тройки

            if (sum === 0) {
                // Если сумма равна нулю — сохраняем тройку
                result.push([nums[i], nums[left], nums[right]]);

                // Пропускаем одинаковые значения слева, чтобы не повторять тройки
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Пропускаем одинаковые значения справа
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Сдвигаем оба указателя внутрь
                left++;
                right--;
            } else if (sum < 0) {
                // Если сумма меньше нуля — нужно увеличить её, сдвигаем левый указатель вправо
                left++;
            } else {
                // Если сумма больше нуля — нужно уменьшить её, сдвигаем правый указатель влево
                right--;
            }
        }
    }
    return result; // Возвращаем все найденные уникальные тройки
}


console.log(threeSum2([-1, 0, 1, 2, -1, -4]));//[[-1,-1,2],[-1,0,1]]
console.log(threeSum2([0, 1, 1]));//0
console.log(threeSum2([0, 0, 0]));//[0,0,0]

