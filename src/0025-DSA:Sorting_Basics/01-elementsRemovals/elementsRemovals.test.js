const elementsRemoval = require("./elementsRemovals");

describe("Elements Removal Tests", () => {
    const cases = [
        // Test cases
        {
            input: [2, 1],
            expected: 4
        },
        {
            input: [5],
            expected: 5
        },
        {
            input: [3, 2, 1],
            expected: 10
        },
        {
            input: [4, 2, 1, 3],
            expected: 20
        },
        {
            input: [10, 20, 30],
            expected: 100
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = elementsRemoval(input);
            expect(result).toEqual(expected);
        });
    });
});