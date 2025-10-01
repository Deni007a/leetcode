/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
    // Словарь
    const roman = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let temp = 0;
    let prevValue = 0; // Предыдущее значение для сравнения

    // Разворачиваем строку: справа налево
    let reversedString = s.split("").reverse().join("");

    for (const element of reversedString) {
        const currentValue = roman[element];
        // Если текущее значение больше предыдущего — прибавляем
        if (currentValue >= prevValue) {
            temp += currentValue;
        } else {
            // Иначе — вычитаем (например, IV = 5 - 1)
            temp -= currentValue;
        }
        prevValue = currentValue;
    }
    return temp;
};


console.log(romanToInt("III")); //3
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("IV")); //4