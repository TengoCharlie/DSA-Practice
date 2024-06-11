const checkBit = require("./checkBit");

describe("Check Bit Tests", () => {
    const cases = [
        // Test cases
        {
            input: [4, 1],
            expected: 0
        },
        {
            input: [5, 2],
            expected: 1
        },
        {
            input: [7, 1],
            expected: 1
        },
        {
            input: [15, 3],
            expected: 1
        },
        {
            input: [10, 0],
            expected: 0
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = checkBit(...input);
            expect(result).toEqual(expected);
        });
    });
});
