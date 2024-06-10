const unsetBit = require("./unsetBit");

describe("Unset Bit Tests", () => {
    const cases = [
        // Test cases
        {
            input: [4, 1],
            expected: 4
        },
        {
            input: [5, 2],
            expected: 1
        },
        {
            input: [7, 1],
            expected: 5
        },
        {
            input: [15, 3],
            expected: 7
        },
        {
            input: [10, 0],
            expected: 10
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = unsetBit(...input);
            expect(result).toEqual(expected);
        });
    });
});
