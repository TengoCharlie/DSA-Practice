const countSetBits = require("./numSetBits");

describe("Number of 1 Bits Tests", () => {
    const cases = [
        // Test cases
        {
            input: 11,
            expected: 3
        },
        {
            input: 6,
            expected: 2
        },
        {
            input: 15,
            expected: 4
        },
        {
            input: 16,
            expected: 1
        },
        {
            input: 31,
            expected: 5
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = countSetBits(input);
            expect(result).toEqual(expected);
        });
    });
});
