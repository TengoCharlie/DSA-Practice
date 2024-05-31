
const palindromeList = require("./palindromeList");

describe("Palindrome List Tests", () => {
    const cases = [
        // TODO:- Need to update cases
        [[1, 2, 3, 2, 1], 1],
        [[1, 2, 3, 3, 2], 0],
        [[1, 3, 2], 0],
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