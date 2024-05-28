
const reverseLinkedList = require("./reverseLinkedList");

describe("Revrese Linked List Tests", () => {
    const cases = [
        // TODO:- Need to update cases
        [11, 3],
        [9, 3]
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = reverseLinkedList(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
