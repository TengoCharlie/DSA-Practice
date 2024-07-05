const kthSmallestElement = require("./kthsmallest");

describe("Kth Smallest Element Tests", () => {
    const cases = [
        // Test cases
        {
            input: { A: [2, 1, 4, 3, 2], B: 3 },
            expected: 2
        },
        {
            input: { A: [1, 2], B: 2 },
            expected: 2
        },
        {
            input: { A: [7, 10, 4, 3, 20, 15], B: 3 },
            expected: 7
        },
        {
            input: { A: [12, 3, 5, 7, 19], B: 4 },
            expected: 12
        },
        {
            input: { A: [1, 5, 8, 10], B: 2 },
            expected: 5
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = kthSmallestElement(input.A, input.B);
            expect(result).toEqual(expected);
        });
    });
});
