const singleNumberIII = require("./singleNumber3");

describe("Single Number III Tests", () => {
    const cases = [
        // Test cases
        {
            input: [1, 2, 3, 1, 2, 4],
            expected: [3, 4]
        },
        {
            input: [1, 2],
            expected: [1, 2]
        },
        {
            input: [2, 1, 2, 3, 4, 1],
            expected: [3, 4]
        },
        {
            input: [5, 6, 7, 8, 5, 6],
            expected: [7, 8]
        },
        {
            input: [0, 0, 1, 2],
            expected: [1, 2]
        },
        {
            input: [3857,21351,23083,3857,19441,2102,15569,11685,2102,21351,161,11685,161,6305,6305,19441,15569,8245],
            expected: [8245, 23083]
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = singleNumberIII(input);
            expect(result).toEqual(expected);
        });
    });
});
