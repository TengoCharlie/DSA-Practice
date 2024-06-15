const subarrayOrSum = require("./subarrayOrSum");

describe("Subarray OR Sum Tests", () => {
    const cases = [
        {
            input: [1, 2, 3, 4, 5],
            expected: 71
        },
        {
            input: [7, 8, 9, 10],
            expected: 110
        },
        {
            input: [1, 1, 1, 1],
            expected: 10
        },
        {
            input: [3, 6, 8, 10, 15],
            expected: 137
        },
        {
            input: [1],
            expected: 1
        },
        {
            input: [100000000],
            expected: 100000000
        },
        {
            input: [10, 20, 30, 40, 50],
            expected: 255
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = subarrayOrSum(input);
            expect(result).toBe(expected);
        });
    });
});
