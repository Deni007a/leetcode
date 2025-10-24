/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {

    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = "";

    for (let key of Object.keys(map)) {
        //если число больше или равно ключу
        while (num >= map[key]) {
            // добавляем ключ в результат
            result += key;
            // отнимаем ключ от числа и остаток крутится в цикле пока все не выберет
            num -= map[key];
        }
    }
    return result;
};

// более производительная версия из-за ЗАМЕНЫ MAP на 2 массива
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var intToRoman2 = function (num) {
    let result = "";
    for (let i = 0; num; i++) {
        while (num >= val[i]) {
            result += rom[i];
            num -= val[i];
        }
    }
    return result;

};

console.log(intToRoman2(3)) //"III"
console.log(intToRoman2(58)) //"LVIII"
console.log(intToRoman2(1994)) //"MCMXCIV"
