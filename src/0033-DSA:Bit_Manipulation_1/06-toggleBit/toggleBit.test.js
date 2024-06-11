const toggleBit = require("./toggleBit");

describe("Toggle i-th Bit Tests", () => {
    const cases = [
        // Test cases
        {
            input: [4, 1],
            expected: 6
        },
        {
            input: [5, 2],
            expected: 1
        },
        {
            input: [8, 3],
            expected: 0
        },
        {
            input: [0, 0],
            expected: 1
        },
        {
            input: [31, 0],
            expected: 30
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = toggleBit(...input);
            expect(result).toEqual(expected);
        });
    });
});
