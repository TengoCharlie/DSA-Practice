const findIntersection = require("./findIntersection");
const arrayToList = require("./../../../utils/arrayToLinkedList");
const listToArray = require("./../../../utils/linkedListToArray");
const LNode = require('./../../../utils/linkedListNode');

describe("Intersection of Linked Lists Tests", () => {
    const cases = [
        // Test cases
        {
            inputA: [1, 2, 3, 4, 5],
            inputB: [6, 3, 4, 5],
            intersection: [3, 4, 5]
        },
        {
            inputA: [1, 2, 3],
            inputB: [4, 5],
            intersection: []
        }
    ];


    function createIntersectingLists(inputA, inputB, intersection) {
        const listA = arrayToList(inputA);
        const listB = arrayToList(inputB);
        const intersectList = arrayToList(intersection);

        if (!listA || !listB) return { listA, listB };

        let tempA = listA;
        while (tempA.next) {
            tempA = tempA.next;
        }
        tempA.next = intersectList;

        let tempB = listB;
        while (tempB.next) {
            tempB = tempB.next;
        }
        tempB.next = intersectList;

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