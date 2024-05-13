
const singleElementInSortedArray = require("./singleElementInSortedArray");

describe("Factors Sort Tests", () => {
    const cases = [
        [[1, 1, 7], 7],
        [[2, 3, 3], 2]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = singleElementInSortedArray(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
