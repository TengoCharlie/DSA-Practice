const singleNumberII = require("./singleNumberII");

describe("Single Number II Tests", () => {
    const cases = [
        // Test cases
        {
            input: [2, 2, 3, 2],
            expected: 3
        },
        {
            input: [0, 1, 0, 1, 0, 1, 99],
            expected: 99
        },
        {
            input: [30000, 500, 100, 30000, 100, 30000, 100],
            expected: 500
        },
        {
            input: [-2, -2, 1, -2],
            expected: 1
        },
        {
            input: [1, 1, 1, 2],
            expected: 2
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = singleNumberII(input);
            expect(result).toEqual(expected);
        });
    });
});
