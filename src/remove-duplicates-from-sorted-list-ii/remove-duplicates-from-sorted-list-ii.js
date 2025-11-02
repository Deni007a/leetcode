/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


const deleteDuplicates = function(head) {

    let dummy = { val: 0, next: head };// фиктивный узел
    let prev = dummy;// указатель на предыдущий узел
    let current = head;// указатель на текущий узел

    while (current) {
        // есть ли дубликаты у текущего узла
        if (current.next && current.val === current.next.val) {
            // пропускаем все узлы с одинаковыми значениями
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            // связываем предыдущий уникальный узел с первым узлом после дубликатов
            prev.next = current.next;
        } else {
            // если дубликатов нет, двигаем указатель предыдущего узла
            prev = prev.next;
        }

        // Переходим к следующему узлу
        current = current.next;
    }

    // Возвращаем список без дубликатов (пропуская фиктивный узел)
    return dummy.next;
};
let s1 = {val: 1, next: {val: 1, next: {val: 2, next: null}}}
let s2 = {val: 1, next: {val: 1, next: {val: 2, next: {val: 3, next: {val: 3, next: null}}}}}
console.log(deleteDuplicates(s1)) //2
console.log(deleteDuplicates(s2)) //2

