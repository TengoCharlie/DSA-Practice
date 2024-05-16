
const squareRootInteger = require("./squareRootInteger");

describe("Square Root Integer Tests", () => {
    const cases = [
        [11, 3],
        [9, 3]
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = squareRootInteger(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
