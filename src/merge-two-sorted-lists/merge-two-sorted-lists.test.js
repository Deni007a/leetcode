import {mergeTwoLists} from "./merge-two-sorted-lists.js";

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// создание списка из массива
function createList(arr) {
    const node = new ListNode();
    let tail = node;

    for (const val of arr) {
        tail.next = new ListNode(val);
        tail = tail.next;
    }
    return node.next;
}

// превратит лист в массив
function toArray(list) {
    const temp = [];
    while (list) {
        temp.push(list.val);
        list = list.next;
    }
    return temp;
}

test('merge sorted lists, объединить отсортированные списки', () => {
    const testCases = [
        {
            l1: [1, 3, 5],
            l2: [2, 4, 6],
            expected: [1, 2, 3, 4, 5, 6],
        },
        {
            l1: [],
            l2: [1, 2],
            expected: [1, 2],
        },
        {
            l1: [1, 2],
            l2: [],
            expected: [1, 2],
        },
        {
            l1: [],
            l2: [],
            expected: [],
        }
    ];

    for (const {l1, l2, expected} of testCases) {
        const result = mergeTwoLists(createList(l1), createList(l2));
        expect(toArray(result)).toEqual(expected);
    }
});
