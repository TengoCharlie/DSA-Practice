
const countSort = require("./countSort");

describe("Count sort of An Array Tests", () => {
    const cases = [
        [[1, 3, 1], [1, 1, 3]],
        [[4, 2, 1, 3], [1, 2, 3, 4]],
        [[6,3,3,6,7,8,7,3,7], [3, 3, 3, 6, 6, 7, 7, 7, 8]]
        // TODO
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = countSort(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
