const singleNumber = require("./singleNumber");

describe("Single Number Tests", () => {
    const cases = [
        // Test cases
        {
            input: [1, 2, 2, 3, 1],
            expected: 3
        },
        {
            input: [1, 2, 2],
            expected: 1
        },
        {
            input: [4, 1, 2, 1, 2],
            expected: 4
        },
        {
            input: [2, 2, 1],
            expected: 1
        },
        {
            input: [1],
            expected: 1
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = singleNumber(input);
            expect(result).toEqual(expected);
        });
    });
});
