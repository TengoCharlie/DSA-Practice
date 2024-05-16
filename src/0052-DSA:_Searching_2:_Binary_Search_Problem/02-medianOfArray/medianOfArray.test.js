
const medianOfArray = require("./medianOfArray");

describe("Median of Array Tests", () => {
    const cases = [
        [[1, 4, 5], [2, 3], 3.0],
        [[1, 2, 3], [4], 2.5]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = medianOfArray(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
