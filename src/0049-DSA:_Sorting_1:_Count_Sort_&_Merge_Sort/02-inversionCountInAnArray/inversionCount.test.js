
const inversionCount = require("./inversionCount");

describe("Inversion Count In An Array Tests", () => {
    const cases = [
        [[1, 2, 3], 1],
        [[3, 4, 1, 2], 4]
        // TODO
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = inversionCount(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
