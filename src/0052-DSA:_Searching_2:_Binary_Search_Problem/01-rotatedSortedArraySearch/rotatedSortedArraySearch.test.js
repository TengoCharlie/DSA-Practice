
const rotatedSortedArraySearch = require("./rotatedSortedArraySearch");

describe("Rotated Sorted Array Search Tests", () => {
    const cases = [
        [[4, 5, 6, 7, 0, 1, 2, 3], 4, 0],
        [[9, 10, 3, 5, 6, 8], 5, 3]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = rotatedSortedArraySearch(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
