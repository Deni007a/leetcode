/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    let a = m - 1;       // последний валидный элемент в nums1
    let b = n - 1;       // последний элемент в nums2
    let temp = m + n - 1;   // последний индекс в общем массиве

    while (a >= 0 && b >= 0) {
        if (nums1[a] > nums2[b]) {
            nums1[temp] = nums1[a];
            a--;
        } else {
            nums1[temp] = nums2[b];
            b--;
        }
        temp--;
    }
    // если остались элементы в nums2
    while (b >= 0) {
        nums1[temp] = nums2[b];
        b--;
        temp--;
    }
    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1,2,2,3,5,6]
