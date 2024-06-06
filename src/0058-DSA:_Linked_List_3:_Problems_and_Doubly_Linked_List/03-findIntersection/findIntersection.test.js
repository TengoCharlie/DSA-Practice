const findIntersection = require("./findIntersection");
const arrayToList = require("./../../../utils/arrayToLinkedList");
const listToArray = require("./../../../utils/linkedListToArray");

describe("Intersection of Linked Lists Tests", () => {
    const cases = [
        // Test cases
        {
            inputA: [1, 2],
            inputB: [6, 7],
            intersection: [3, 4, 5]
        },
        {
            inputA: [1, 2],
            inputB: [6],
            intersection: [3, 4, 5]
        },
        {
            inputA: [1, 2, 3],
            inputB: [4, 5],
            intersection: []
        },
        {
            inputA: [1],
            inputB: [],
            intersection: [5, 2, 3]
        },
        {
            inputA: [],
            inputB: [],
            intersection: [5, 2, 3]
        },
        {
            inputA: [1, 2],
            inputB: [3],
            intersection: [4]
        },
    ];


    function createIntersectingLists(inputA, inputB, intersection) {
        let listA = arrayToList(inputA);
        let listB = arrayToList(inputB);
        const intersectList = arrayToList(intersection);


        if (!listA) listA = intersectList;
        else {let tempA = listA;
        while (tempA.next) {
            tempA = tempA.next;
        }
        tempA.next = intersectList;}

        if (!listB) listB = intersectList;
        else {
            let tempB = listB;
            while (tempB.next) {
                tempB = tempB.next;
            }
            tempB.next = intersectList;
        }
        return { listA, listB };
    }

    cases.forEach(({ inputA, inputB, intersection }) => {
        test(`Should return the intersection starting at ${intersection} when merging lists ${inputA} and ${inputB}`, () => {
            const { listA, listB } = createIntersectingLists(inputA, inputB, intersection);
            const result = findIntersection(listA, listB);
            const resultArray = listToArray(result);
            expect(resultArray).toEqual(intersection);
        });
    });
});