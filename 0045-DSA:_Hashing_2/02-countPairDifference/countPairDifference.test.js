
const countPairDifference = require("./countPairDifference");

describe("Count Pair Difference Tests", () => {
    const cases = [
        [["3, 5, 1, 2"], 4, 1],                            // Basic case with one valid pair
        [["1, 2, 1, 2"], 1, 4],                            // Multiple valid pairs
        [["1, 3, 5"], 10, 0],                              // No pairs matching the difference
        [["10, 20, 30, 40, 50, 60"], 15, 0],               // No pairs matching the specified difference in a larger array
        [["5, 10, 15, 20, 25, 30, 35, 40"], 5, 7],         // Multiple matches with a common difference
        [["7, 7, 7, 7, 7"], 0, 20],                        // All elements the same, difference zero
        [["1000000000, 500000000, 1000000000"], 500000000, 2]  // Edge values with maximum integers
    ]


    test.concurrent.each(cases)
        ('On Input %s and %i should return %i ', (a, b, expected) => {
            const result = countPairDifference(a, b);
            expect(result).toBe(expected);
        });
});
