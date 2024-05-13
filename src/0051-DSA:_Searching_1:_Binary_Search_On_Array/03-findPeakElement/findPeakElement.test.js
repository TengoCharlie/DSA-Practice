
const findPeakElement = require("./findPeakElement");

describe("Factors Sort Tests", () => {
    const cases = [
        [[1, 2, 3, 4, 5], 5],
        [[5, 17, 100, 11], 100]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = findPeakElement(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
