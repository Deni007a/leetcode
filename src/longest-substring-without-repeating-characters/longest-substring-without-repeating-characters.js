/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {

    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Если символ уже был — сдвигаем левую границу
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
            //console.log(left)
        }

        map.set(char, right); // обновляем позицию символа
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;


};

// тут находим и вырезаем сами длинные не повторяюще слова и забрасывем в temp
// потом находим самое длинное слово
export const lengthOfLongestSubstring2 = function (s) {
    let temp = [];
    let arr = [];
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
        } else {
            temp.push(s.slice(left, i));
            left = i;
            // начинаем с текущего символа
            arr = [s[i]];
        }
    }

// Добавляем хвост, если остался
    if (left < s.length) {
        temp.push(s.slice(left));
    }

    //console.log(temp);
    // Находим самую длинную подстроку
    let longest = temp.reduce((accumulator, curent) =>
        accumulator.length >= curent.length ? accumulator : curent);
    //console.log(longest)
    return longest.length;

};

console.log(lengthOfLongestSubstring("abcabcbbz")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3

console.log(lengthOfLongestSubstring2("abcabcbbz")) // 3
