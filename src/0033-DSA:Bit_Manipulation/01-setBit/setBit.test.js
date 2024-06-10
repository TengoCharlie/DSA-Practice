const setBits = require("./setBit");

describe("Set Bit Tests", () => {
    const cases = [
        // Test cases
        {
            input: [3, 5],
            expected: 40
        },
        {
            input: [4, 4],
            expected: 16
        },
        {
            input: [0, 0],
            expected: 1
        },
        {
            input: [0, 1],
            expected: 3
        },
        {
            input: [1, 2],
            expected: 6
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = setBits(...input);
            expect(result).toEqual(expected);
        });
    });
});
