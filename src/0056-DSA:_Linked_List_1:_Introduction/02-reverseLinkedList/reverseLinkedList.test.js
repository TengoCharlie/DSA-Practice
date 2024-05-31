
const reverseLinkedList = require("./reverseLinkedList");

describe("Revrese Linked List Tests", () => {
    const cases = [
        // TODO:- Need to update cases
        [[97, 63, 89, 34, 82, 95, 4, 70, 14, 41, 38, 83, 49, 32, 68, 56, 99, 52, 33, 54], [54,33,52,99,56,68,32,49,83,38,41,14,70,4,95,82,34,89,63,97]],
    ]

    function LNode(data) {
        this.data = data;
        this.next = null;
      }      

    cases.forEach(([A, B]) => {
        test(`Should Return ${B}, on Input A = ${A}`, () => {
            let head = new LNode(A[0]);
            let temp = head;
            for (let i = 1; i < A.length; i++) {
                temp.next = new LNode(A[i]);
                temp = temp.next;
            }
            const result = reverseLinkedList(head);
            temp = result;
            const arr = [temp.data];
            while (temp.next != null) {
                temp = temp.next;
                arr.push(temp.data)
            }
            expect(arr).toEqual(B);
        })
    })
});