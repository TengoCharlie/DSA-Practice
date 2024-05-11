
const inversionCount = require("./inversionCount");

describe("Inversion Count In An Array Tests", () => {
    const cases = [
        [[1, 3, 2], 1],
        [[3, 4, 1, 2], 4],
        [[45, 10, 15, 25, 50], 3],
        [[28, 18, 44, 49, 41, 14], 8]
        // TODO
    ]

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = inversionCount(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
