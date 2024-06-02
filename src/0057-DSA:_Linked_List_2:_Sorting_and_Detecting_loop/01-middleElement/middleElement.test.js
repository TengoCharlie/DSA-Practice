const middleElement = require("./middleElement");
const LNode = require("./../../../utils/linkedListNode")

describe("Middle Element of Linked List Tests", () => {
    const cases = [
        // Test cases
        {
            input: [1, 2, 3, 4, 5],
            expected: 3
        },
        {
            input: [1, 5, 6, 2, 3, 4],
            expected: 2
        }
    ];


    cases.forEach(({input, expected}) => {
        test(`Should return ${expected} as the middle element for the linked list ${input}`, () => {
            let head = new LNode(input[0]);
            let temp = head;
            for (let i = 1; i < input.length; i++) {
                temp.next = new LNode(input[i]);
                temp = temp.next;
            }
            const result = middleElement(head);
            expect(result).toEqual(expected);
        });
    });
});