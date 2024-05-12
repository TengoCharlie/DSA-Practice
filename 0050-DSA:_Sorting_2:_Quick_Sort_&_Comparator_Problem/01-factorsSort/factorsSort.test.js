
const factorsSort = require("./factorsSort");

describe("Factors Sort Tests", () => {
    const cases = [
   
        // TODO
    ]


    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = factorsSort(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
