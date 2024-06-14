const findTwoMissingNumbers = require("./findTwoMissingNumbers");

describe("Find Two Missing Numbers Tests", () => {
    const cases = [
        // Test cases
        {
            input: [3, 2, 4],
            expected: [1, 5]
        },
        {
            input: [5, 1, 3, 6],
            expected: [2, 4]
        },
        {
            input: [1, 2, 3, 5, 6, 8],
            expected: [4, 7]
        },
        {
            input: [2, 3, 5],
            expected: [1, 4]
        },
        {
            input: [1, 2],
            expected: [3, 4]
        },
        {
            input: [7, 2, 3, 6, 4, 5, 1],
            expected: [8, 9]
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = findTwoMissingNumbers(input);
            expect(result).toEqual(expected);
        });
    });
});
