const minHelpFromSam = require("./minHelpFromSam");

describe("Min Help From Sam Tests", () => {
    const cases = [
        // Test cases
        {
            input: 5,
            expected: 2
        },
        {
            input: 3,
            expected: 2
        },
        {
            input: 0,
            expected: 0
        },
        {
            input: 1,
            expected: 1
        },
        {
            input: 10,
            expected: 2
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = minHelpFromSam(input);
            expect(result).toEqual(expected);
        });
    });
});
