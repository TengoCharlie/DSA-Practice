
const mergeTwoSortedArrays = require("./mergeTwoSortedArrays");

describe("Count Pair Difference Tests", () => {
    const cases = [
        // TODO
    ]


    test.concurrent.each(cases)
        ('On Input %s and %i should return %i ', (a, b, expected) => {
            const result = mergeTwoSortedArrays(a, b);
            expect(result).toBe(expected);
        });
});
