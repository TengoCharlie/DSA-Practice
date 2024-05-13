
const searchForRange = require("./searchForRange");

describe("Search For A Range Tests", () => {
    const cases = [
        [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
        [[5, 17, 100, 111], 3, [-1, -1]]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = searchForRange(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
