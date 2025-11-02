/**
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // высота бортика
        let h = Math.min(height[left], height[right]);
        // ширина бортика
        let w = right - left;
        let area = h * w;
        // обновляем мах
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            // если равны — можно сдвинуть оба
            left++;
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))//49
console.log(maxArea([1, 1]))//1