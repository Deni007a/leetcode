/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



const addTwoNumbers = function(l1, l2) {
   // конвертируем в массивы
    const arr1 = listToArray(l1).reverse();
    const arr2 = listToArray(l2).reverse();
    // конвертируем в числа
    const num1 = BigInt(arr1.join(''));
    const num2 = BigInt(arr2.join(''));
    // складываем
    const sum = (num1 + num2).toString().split('').reverse().map(Number);
    //
    return arrayToList(sum);
};

function listToArray(list) {
    const arr = [];
    //пока есть узел
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}
// превращаем в список
function arrayToList(arr) {
    // создаем фиктивный узел
    let dummy = { val: 0, next: null };
    // указатель на текущий узел
    let current = dummy;
    // проходим по массиву
    for (let val of arr) {
        current.next = { val, next: null };
        current = current.next;
    }
    //возвращаем начало списка
    return dummy.next;
}



console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])));
// → { val: 7, next: { val: 0, next: { val: 8, next: null } } }

console.log(addTwoNumbers(arrayToList([9,9,9,9,9,9,9]), arrayToList([9,9,9,9])));
// → { val: 8, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } }



// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); //[7,0,8]
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); //[8,9,9,9,0,0,0,1]