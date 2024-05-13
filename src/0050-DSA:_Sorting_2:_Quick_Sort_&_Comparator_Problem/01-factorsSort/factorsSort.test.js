
const factorsSort = require("./factorsSort");

describe("Factors Sort Tests", () => {
    const cases = [
        [[6, 8, 9], [9, 6, 8]],
        [[2, 4, 7], [2, 7, 4]],
        [[36,13,13,26,37,28,27,43,7], [7, 13, 13, 37, 43, 26, 27, 28, 36]]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = factorsSort(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
