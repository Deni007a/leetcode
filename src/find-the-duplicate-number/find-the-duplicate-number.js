/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
};
const findDuplicate2 = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};

const findDuplicate3 = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Шаг 1: Найти точку встречи в петле
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }

    // Шаг 2: Найти вход в цикл (дубликат)
    //
    fast = nums[0];
    //console.log(nums[slow],"**")
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}


let x = findDuplicate3
console.log(x([1,3,4,2,2]));
console.log(x([3,1,3,4,2]));
console.log(x([3,3,3,3,3]));
