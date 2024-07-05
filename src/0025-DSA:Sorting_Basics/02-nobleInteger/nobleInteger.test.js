const nobleInteger = require("./nobleInteger");

describe("Noble Integer Tests", () => {
    const cases = [
        // Test cases
        {
            input: [3, 2, 1, 3],
            expected: 1
        },
        {
            input: [1, 1, 3, 3],
            expected: -1
        },
        {
            input: [0, -1, 2, 3, -2],
            expected: 1
        },
        {
            input: [5, 6, 7, 8, 9, 10],
            expected: -1
        },
        {
            input: [4, 2, 0, 3, 1],
            expected: 1
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = nobleInteger(input);
            expect(result).toEqual(expected);
        });
    });
});
