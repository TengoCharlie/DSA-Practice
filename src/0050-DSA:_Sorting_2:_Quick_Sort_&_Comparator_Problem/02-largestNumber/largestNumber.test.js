
const largestNumber = require("./largestNumber");

describe("Largest Number Sort Tests", () => {
    const cases = [
        [[3, 30, 34, 5, 9], "9534330"],
        [[2, 3, 9, 0], "9320"],
        [[10, 3, 5, 2, 64, 89, 87, 99, 9], "99989876453210"]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = largestNumber(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
