const mergeTwoSortedLists = require("./mergeSortedLinkedList");

describe("Merge Two Sorted Lists Tests", () => {
    const cases = [
        // Test cases
        {
            inputA: [5, 8, 20],
            inputB: [4, 11, 15],
            expected: [4, 5, 8, 11, 15, 20]
        },
        {
            inputA: [1, 2, 3],
            inputB: [],
            expected: [1, 2, 3]
        },
        {
            inputA: [],
            inputB: [1, 2, 3],
            expected: [1, 2, 3]
        },
        {
            inputA: [1, 3, 5],
            inputB: [2, 4, 6],
            expected: [1, 2, 3, 4, 5, 6]
        }
    ];

    function LNode(data) {
        this.data = data;
        this.next = null;
    }

    function arrayToList(arr) {
        if (arr.length === 0) return null;
        let head = new LNode(arr[0]);
        let temp = head;
        for (let i = 1; i < arr.length; i++) {
            temp.next = new LNode(arr[i]);
            temp = temp.next;
        }
        return head;
    }

    function listToArray(list) {
        const arr = [];
        let temp = list;
        while (temp) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }

    cases.forEach(({inputA, inputB, expected}) => {
        test(`Should return ${expected} when merging lists ${inputA} and ${inputB}`, () => {
            const listA = arrayToList(inputA);
            const listB = arrayToList(inputB);
            const result = mergeTwoSortedLists(listA, listB);
            const resultArray = listToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
});
