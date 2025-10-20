/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) return s;

    // Создаем корзины для каждой строки
    const baskets = new Array(numRows).fill().map(() => []);
    // начинаем с корзины 0
    let currentBasket = 0;
    // двигаемся вниз
    let goingDown = true;

    // Раскладываем буквы по корзинам
    for (let i = 0; i < s.length; i++) {
        baskets[currentBasket].push(s[i]);

        // Решаем, в какую корзину класть следующую букву
        if (goingDown) {
            currentBasket++;
            if (currentBasket === numRows - 1) {
                goingDown = false; // дошли до низа - идем вверх
            }
        } else {
            currentBasket--;
            if (currentBasket === 0) {
                goingDown = true; // дошли до верха - идем вниз
            }
        }
    }

    return baskets.flatMap(x=>x).join('');

};

console.log(convert("PAYPALISHIRING", 3)) //"PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)) //"PINALSIGYAHRPI"
console.log(convert("A", 1)) //"A"