
const mergeTwoSortedArrays = require("./mergeTwoSortedArrays");

describe("Merge Two Sorted Array Tests", () => {
    const cases = [
        [[4, 7, 9], [2, 11, 19], [2, 4, 7, 9, 11, 19]],
        [[1], [2], [1, 2]]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = mergeTwoSortedArrays(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
