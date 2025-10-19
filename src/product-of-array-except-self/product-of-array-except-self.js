import {log} from "debug";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// с использования деления
function productExceptSelf(nums) {
    // считает количество нулей
    const zeroCount = nums.filter(n => n === 0).length;

    const totalProduct = nums.reduce((acc, cur) => {
        if (cur === 0) {
            return acc; // пропускаем ноль
        } else {
            return acc * cur; // умножаем, если не ноль
        }
    }, 1);

    const resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 1) {
            resultArr.push(0);
        } else if (zeroCount === 1) {
            resultArr.push(nums[i] === 0 ? totalProduct : 0);
        } else {
            resultArr.push(totalProduct / nums[i]);
        }
    }

    return resultArr;
}

 export function productExceptSelf2(nums) {

    // префиксы все сум чисел  слева направо
    let prefix = [];
    // начально число 1 так как при * любого числа получаем его само
    let start = 1

    for (let i = 0; i < nums.length; i++) {
        prefix.push(start);
        start = start * nums[i]

    }
    console.log('prefix :',prefix)

    // постфиксы: произведения всех элементов справа от i
    let postfix = [];
    start = 1; // пустое произведение справа = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        postfix[i] = start;      // записываем сразу в позицию i
        start = start * nums[i];
    }
   console.log('postfix:', postfix);

    // итоговый массив: для каждой позиции i произведение prefix[i] * postfix[i]
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(prefix[i] * postfix[i]);
    }
    //  нормализуем чтобы небыло идеотизхма с -0 или +0
     return res.map(v => Object.is(v, -0) ? 0 : v);



}


// упрощенная втрая версия без дополнительного прогона
export function productExceptSelf3(nums) {

    // префиксы все сум чисел  слева направо
    let prefix = [];
    // начально число 1 так как при * любого числа получаем его само
    let start = 1

    for (let i = 0; i < nums.length; i++) {
        prefix.push(start);
        start = start * nums[i]

    }
    //console.log('prefix :',prefix)

    //результат
    let res = [];
    start = 1; // пустое произведение справа = 1
    // делаем это цикле два действия
    for (let i = nums.length - 1; i >= 0; i--) {
        res.unshift(start*prefix[i])
        //console.log(res);
        start = start * nums[i]
    }



    //  нормализуем чтобы небыло идеотизхма с -0 или +0
    return res.map(v => Object.is(v, -0) ? 0 : v);



}


console.log(productExceptSelf3([1, 2, 3, 4]))//[24,12,8,6]
console.log(productExceptSelf3([-1, 1, 0, -3, 3]))//[0,0,9,0,0]

