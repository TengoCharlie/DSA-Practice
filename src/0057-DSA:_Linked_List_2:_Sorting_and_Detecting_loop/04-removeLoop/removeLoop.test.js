const removeLoop = require("./removeLoop");
const listToArray = require("./../../../utils/linkedListToArray");
const LNode = require('./../../../utils/linkedListNode');

describe("Remove Loop from Linked List Tests", () => {
    const cases = [
        // Test cases
        {
            input: {
                list: [1, 2],
                pos: 1
            },
            expected: [1, 2]
        },
        {
            input: {
                list: [3, 2, 4, 5, 6],
                pos: 2
            },
            expected: [3, 2, 4, 5, 6]
        },
        {
            input: {
                list: [1, 3, 2, 4],
                pos: -1
            },
            expected: [1, 3, 2, 4]
        }
    ];

    function LNode(data) {
        this.data = data;
        this.next = null;
    }

    function createLinkedList(arr, pos) {
        if (arr.length === 0) return null;
        let head = new LNode(arr[0]);
        let temp = head;
        let cycleNode = null;
        if (pos === 0) cycleNode = head;

        for (let i = 1; i < arr.length; i++) {
            temp.next = new LNode(arr[i]);
            temp = temp.next;
            if (i === pos) cycleNode = temp;
        }
        if (cycleNode) temp.next = cycleNode;
        return head;
    }


    cases.forEach(({ input: { list, pos }, expected }) => {
        test(`Should return ${expected} when the list ${list} has a cycle starting at position ${pos}`, () => {
            const linkedList = createLinkedList(list, pos);
            const result = removeLoop(linkedList);
            const resultArray = listToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
});
