
const countSort = require("./countSort");

describe("Count sort of An Array Tests", () => {
    const cases = [
        [[1, 3, 1], [1, 1, 3]],
        [[4, 2, 1, 3], [1, 2, 3, 4]]
        // TODO
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = countSort(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
