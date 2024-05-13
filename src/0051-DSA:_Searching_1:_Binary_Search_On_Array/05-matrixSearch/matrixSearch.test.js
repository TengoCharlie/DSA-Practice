
const matrixSearch = require("./matrixSearch");

describe("Matrix Search Tests", () => {
    const cases = [
        [[
            [1,   3,  5,  7],
            [10, 11, 16, 20],
            [23, 30, 34, 50]
          ], 3, 1],
          [[
            [5, 17, 100, 111],
            [119, 120, 127, 131]
          ], 3, 0]
            // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = matrixSearch(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
