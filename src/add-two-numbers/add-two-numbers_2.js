/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



const addTwoNumbers = function(l1, l2) {
    // Создаём фиктивный узел, от которого будем строить результат
    let dummy = { val: 0, next: null };

    // Указатель на текущий узел в результирующем списке
    let current = dummy;

    // Переменная для хранения переноса при сложении (например, 9 + 8 = 17 → перенос 1)
    let carry = 0;

    // Пока есть хотя бы один узел в l1, l2 или остался перенос
    while (l1 || l2 || carry) {
        // Получаем значение текущего узла l1, если он есть, иначе 0
        const val1 = l1 ? l1.val : 0;

        // Получаем значение текущего узла l2, если он есть, иначе 0
        const val2 = l2 ? l2.val : 0;

        // Суммируем значения узлов и перенос
        const sum = val1 + val2 + carry;

        // Обновляем перенос: если сумма ≥ 10, перенос = 1, иначе 0
        carry = Math.floor(sum / 10);

        // Создаём новый узел с цифрой результата (остаток от деления на 10)
        current.next = { val: sum % 10, next: null };

        // Переходим к следующему узлу в результирующем списке
        current = current.next;

        // Переходим к следующему узлу в l1, если он есть
        if (l1) l1 = l1.next;

        // Переходим к следующему узлу в l2, если он есть
        if (l2) l2 = l2.next;
    }

    // Возвращаем начало результирующего списка (пропуская фиктивный узел)
    return dummy.next;
};

// фунция для вызова
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
