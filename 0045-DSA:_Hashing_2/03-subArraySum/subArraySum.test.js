
const subArraySum = require("./subArraySum");

describe("Count Sum Of Sub Array Tests", () => {
    const cases = [
        [[1, 2, 3, 4], 5, 2],                            // Small array with subarrays that sum to 5
        [[0, 0, 0, 0], 0, 10],                           // Array of zeros with zero sum subarrays
        [[1, -1, 2, -2, 3], 0, 3],                       // Mixed positive and negative numbers summing to 0
        [[3, 4, 5], 10, 0],                              // No subarrays matching the target sum
        [[-3, -1, -2, -5, -6], -8, 2],                   // Negative numbers with a negative target sum
        [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 4, 49998]  // Large array of the same value summing to 4
    ]
    




    cases.forEach(([A, B, expected]) => {
        test(`Should Return ${expected}, on Input A = ${A} and B = ${B}`, () => {
            const result = subArraySum(A, B);
            expect(result).toBe(expected);
        })
    })
});
