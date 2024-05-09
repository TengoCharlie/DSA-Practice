
const mergeTwoSortedArrays = require("./mergeTwoSortedArrays");

describe("Count Pair Difference Tests", () => {
    const cases = [
        [[4, 7, 9], [2, 11, 19], [2, 4, 7, 9, 11, 19]] 
        [[1], [2], [1, 2]]
        // TODO
    ]


    test.concurrent.each(cases)
        ('On Input %s and %i should return %i ', (a, b, expected) => {
            const result = mergeTwoSortedArrays(a, b);
            expect(result).toBe(expected);
        });
});
