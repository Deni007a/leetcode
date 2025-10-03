/**
 * @param {string[]} strs
 * @return {string}
 */
//самый длинный префикес
export function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = '';
    // берем за основы первое слово и сравниваем  с другими по буквенно
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        // начианем сравнивать со втрого слова индекс 1
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}


export function longestCommonPrefix2(strs){
    if (!strs.length) return '';

    // сортируем строки по алфавиту поэтому  разные строки окажутся на концах
    strs.sort();
     //берём первую и последнюю строку после сортировки различия покажут границу общего префикса
    const first = strs[0];
    const last = strs[strs.length - 1];

    //сравниваем символы первой и последней строки пока символы совпадают — увеличиваем индекс
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    // возвращаем префикс — от начала до позиции несовпадения
    return first.slice(0, i);

}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]))

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

