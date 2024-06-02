const sortList = require("./sortLinkList");
const arrayToList = require("./../../../utils/arrayToLinkedList");
const listToArray = require("./../../../utils/linkedListToArray");

describe("Sort List Tests", () => {
    const cases = [
        // Test cases
        {
            input: [3, 4, 2, 8],
            expected: [2, 3, 4, 8]
        },
        {
            input: [1],
            expected: [1]
        },
        {
            input: [10, 1, 5, 3],
            expected: [1, 3, 5, 10]
        },
        {
            input: [],
            expected: []
        }
    ];


    cases.forEach(({input, expected}) => {
        test(`Should return ${expected} when sorting the list ${input}`, () => {
            const list = arrayToList(input);
            const result = sortList(list);
            const resultArray = listToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
});