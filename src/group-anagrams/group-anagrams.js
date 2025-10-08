/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function (strs) {

    let ans = {};

    for (let s of strs) {
        let key = s.split('').sort().join('');
        // если нету ключа создаем ключ с пустым массивом
        if (!ans[key]) {
            ans[key] = [];
        }
        // бросаем слово в массив
        ans[key].push(s);
    }
    // возвращаем значения отбрасывая нормализованные ключи
    return Object.values(ans);

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([]));