const painterPartition = require("./painterPartition");

describe("Painter's Partition Problem Tests", () => {
    const cases = [
        {
            input: { A: 2, B: 5, C: [1, 10] },
            expected: 50
        },
        {
            input: { A: 10, B: 1, C: [1, 8, 11, 3] },
            expected: 11
        }
        // Add more test cases as needed
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}: Should Return ${expected} for Input A = ${input.A}, B = ${input.B}, and C = ${JSON.stringify(input.C)}`, () => {
            const result = painterPartition(input.A, input.B, input.C);
            expect(result).toEqual(expected);
        });
    });
});
