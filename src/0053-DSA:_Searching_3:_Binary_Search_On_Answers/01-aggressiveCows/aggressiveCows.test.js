const aggressiveCows = require("./aggressiveCows");

describe("Aggressive Cows Problem Tests", () => {
    const cases = [
        {
            input: { A: [1, 2, 3, 4, 5], B: 3 },
            expected: 2
        },
        {
            input: { A: [1, 2], B: 2 },
            expected: 1
        }
        // Add more test cases as needed
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}: Should Return ${expected} for Input A = ${JSON.stringify(input.A)} and B = ${input.B}`, () => {
            const result = aggressiveCows(input.A, input.B);
            expect(result).toEqual(expected);
        });
    });
});
