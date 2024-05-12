
const reversePair = require("./reversePair");

describe("Reverse Pair of An Array Tests", () => {
    const cases = [
        [[1, 3, 2, 3, 1], 2],
        [[4, 1, 2], 1]
        // TODO
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = countSort(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
