class Solution {
    encode(strs) {
        // Объединяем массив в строку, добавляя перед каждой строкой её длину и символ '#'
        return strs.map(s => s.length + '#' + s).join('');
    }

    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            // 1. Находим позицию разделителя '#'
            let j = i;
            while (s[j] !== '#') j++;

            // 2. Читаем длину строки (между i и j) то число после #
            const length = parseInt(s.slice(i, j));




            // 3. После '#' идёт сама строка длиной length
            const str = s.slice(j + 1, j + 1 + length);
            result.push(str);

            // 4. Сдвигаем индекс на следующий элемент
            i = j + 1 + length;
        }

        return result;
    }
}

const input1 = ["neet","code","love","you"];
const coding = new Solution()
const encoded1 = coding.encode(input1);
console.log(encoded1);
//  "4#neet4#code4#love3#you"

const decoded1 = coding.decode(encoded1);
console.log(decoded1);
//  ["neet","code","love","you"]

