// решени в лоб обход послойно


const trap = function (height) {
    let temp = 0;
    let max = Math.max(...height);

    for (let z = 1; z <= max; z++) {
        let left = null;
        let right = null;

        // Находим левую границу
        for (let i = 0; i < height.length; i++) {
            if (height[i] >= z) {
                left = i;
                break;
            }
        }

        // Находим правую границу
        for (let i = height.length - 1; i >= 0; i--) {
            if (height[i] >= z) {
                right = i;
                break;
            }
        }

        // Если границы найдены — считаем ячейки между ними послойно
        if (left !== null && right !== null && left < right) {
            for (let i = left + 1; i < right; i++) {
                if (height[i] < z) {
                    temp += 1;
                }
            }
        }
    }

    return temp;
};

console.log(trap([4, 2, 0, 3, 2, 5])) //9;
console.log(trap([5, 2, 0, 3, 2, 5])) //13;