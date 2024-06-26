
const findPeakElement = require("./findPeakElement");

describe("Find A Peak Tests", () => {
    const cases = [
        [[1, 2, 3, 4, 5], 5],
        [[5, 17, 100, 11], 100],
        [[5,10,20,56,98,9,6,8,100,82,5], 98],
        [[10], 10],
        [[10, 20], 20],
        [[10, 100000, 100000], 100000]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = findPeakElement(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
