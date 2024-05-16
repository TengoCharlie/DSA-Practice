
const medianOfArray = require("./medianOfArray");

describe("Median of Array Tests", () => {
    const cases = [
        [[1, 4, 5], [2, 3], 3.0],
        [[1, 2, 3], [4], 2.5],
        [[1, 4, 5, 7, 9, 14, 18], [3, 4, 6, 8, 10, 12, 15, 16], 8.0],
        [[], [20], 20.0]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = medianOfArray(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
