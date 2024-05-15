
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
          ], 3, 0],
          [
            [
              [3, 3, 11, 12, 14],
              [16, 17, 30, 34, 35],
              [45, 48, 49, 50, 52],
              [56, 59, 63, 63, 65],
              [67, 71, 72, 73, 79],
              [80, 84, 85, 85, 88],
              [88, 91, 92, 93, 94]
            ],
            94,
            1
          ]
            // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[2]}, on Input A = ${el[0]} and B = ${el[1]}`, () => {
            const result = matrixSearch(el[0], el[1]);
            expect(result).toEqual(el[2]);
        })
    })
});
