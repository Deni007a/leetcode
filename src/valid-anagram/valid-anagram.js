/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
};

export const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    // если символ есть в мапе увеличиваем значение
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    // если символа нет в мапе возвращаем false
    for (let char of t) {
        if (!map.has(char)) return false;
        // уменьшаем значение
        map.set(char, map.get(char) - 1);
        // если значение меньше 0 возвращаем false
        if (map.get(char) < 0) return false;
    }

    return true;


};
