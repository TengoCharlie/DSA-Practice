const reverseLinkedList2 = require("./reverseLinkedList2");

describe("Reverse Linked List II Tests", () => {
    const cases = [
        // Test cases
        {
            input: {
                A: [1, 2, 3, 4, 5],
                B: 2,
                C: 4
            },
            expected: [1, 4, 3, 2, 5]
        },
        {
            input: {
                A: [1, 2, 3, 4, 5],
                B: 1,
                C: 5
            },
            expected: [5, 4, 3, 2, 1]
        }
    ];

    function LNode(data) {
        this.data = data;
        this.next = null;
    }

    cases.forEach(({input: {A, B, C}, expected}) => {
        test(`Should return ${expected}, on input A = ${A}, B = ${B}, C = ${C}`, () => {
            let head = new LNode(A[0]);
            let temp = head;
            for (let i = 1; i < A.length; i++) {
                temp.next = new LNode(A[i]);
                temp = temp.next;
            }
            const result = reverseLinkedList2(head, B, C);
            temp = result;
            const arr = [temp.data];
            while (temp.next != null) {
                temp = temp.next;
                arr.push(temp.data);
            }
            expect(arr).toEqual(expected);
        });
    });
});
