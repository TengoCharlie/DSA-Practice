const isBalanced = require("./balancedPranthesis");

describe("Balanced Parenthesis Tests", () => {
    const cases = [
        // Test cases
        {
            input: "{([])}",
            expected: 1
        },
        {
            input: "(){",
            expected: 0
        },
        {
            input: "()[]",
            expected: 1
        },
        {
            input: "[{()}]",
            expected: 1
        },
        {
            input: "[{()]",
            expected: 0
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = isBalanced(input);
            expect(result).toEqual(expected);
        });
    });
});
