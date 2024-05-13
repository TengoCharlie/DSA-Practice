
const reversePair = require("./reversePair");

describe("Reverse Pair of An Array Tests", () => {
    const cases = [
        [[1, 3, 2, 3, 1], 2],
        [[4, 1, 2], 1],
        [[5, 1, 4, 2, 3], 4], // Additional test cases
        [[1, 2, 3, 4, 5], 0], // No reverse pairs
        [[10, 20, 30, 40], 0], // Larger numbers but no valid reverse pairs
        [[40, 20, 10, 5, 1], 10], // All possible pairs are reverse pairs
        [[-1, -2, -3], 0], // Negative numbers without valid reverse pairs
        [[], 0], // Empty array
        [[10], 0], // Single element
        [[50, 50, 50, 50, 50], 0], // All elements same
        // [[Integer.MAX_VALUE, Integer.MIN_VALUE], 1], // Edge case with max and min integer values
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = reversePair(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
