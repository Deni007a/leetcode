/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (n) {
    // оптимальное решение
    let insertPosition = 0;

    for (let i = 0; i < n.length; i++) {


        if (n[i] !== 0) {
            // Меняем местами ненулевой элемент с позицией для вставки
            [n[insertPosition], n[i]] = [n[i], n[insertPosition]];
            insertPosition++;
        }
    }

    return n;


    // брут форсе решение в лоб
    /*for (let i = 0; i < n.length; i++) {
        if (n[i] === 0) {
            for (let j = i; j < n.length; j++) {
                if (n[j] !== 0) {
                    [n[i], n[j]] = [n[j], n[i]]
                    break
                }

            }
        }
    }
    return n
    */



    // с циклом while решение
    /*
    let ziro = 0;
    let leg = n.length
    for (let i = 0; i < leg; i++) {
        if (n[i] === 0) {
            ziro = i;  // запоминаем позицию нуля
            // первый ненулевой элемент справа
            while (ziro < leg && n[ziro] === 0) {
                ziro++;
            }
            if (ziro < leg) {
                [n[i], n[ziro]] = [n[ziro], n[i]];
            }
        }
    }
    return n;
    */
};


console.log(moveZeroes([1, 0, 0, 2, 0, 4]))//1,2,4,0,0,0
console.log(moveZeroes([1, 0, 2, 0, 4]))//1,2,4,0,0