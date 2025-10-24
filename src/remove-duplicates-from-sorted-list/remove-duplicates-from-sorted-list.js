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
const deleteDuplicates = function (head) {
    if (!head) return head;

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            // Пропускаем дубликат
            current.next = current.next.next;
        } else {
            // Переходим к следующему узлу
            current = current.next;
        }
    }

    return head;
};

let s1 = {val: 1, next: {val: 1, next: {val: 2, next: null}}}
let s2 = {val: 1, next: {val: 1, next: {val: 2, next: {val: 3, next: {val: 3, next: null}}}}}

console.log(deleteDuplicates(s1))//[1,2]
console.log(deleteDuplicates(s2))//[1,2,3]

