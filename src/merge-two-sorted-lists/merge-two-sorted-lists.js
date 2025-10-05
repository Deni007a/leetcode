/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export const  mergeTwoLists = function (list1, list2) {
    const node = new ListNode();
    let tail = node;

    // Пока оба списка не пусты
    while (list1 !== null && list2 !== null) {
        // Сравниваем текущие узлы и добавляем меньший в результирующий список
        if (list1.val < list2.val) {
            // помещаем меньший узел в результирующий список
            tail.next = list1;
            // перемещаем указатель на следующий узел в первом списке
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        // Перемещаем "хвост" нового списка к последнему добавленному узлу
        tail = tail.next;
    }

    // Когда один из списков закончился, добавляем "хвост" второго (оставшиеся элементы)
    // Т.к. оставшиеся элементы уже отсортированы, можно просто прицепить их все сразу.
    tail.next = list1 !== null ? list1 : list2;
    return node.next;
};