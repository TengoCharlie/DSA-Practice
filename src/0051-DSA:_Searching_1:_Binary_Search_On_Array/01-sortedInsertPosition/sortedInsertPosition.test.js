
const sortedInsertPosition = require("./sortedInsertPosition");

describe("Factors Sort Tests", () => {
    const cases = [
        [[1, 3, 5, 6], 5, 2],
        [[1, 4, 9], 3, 1]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = sortedInsertPosition(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
