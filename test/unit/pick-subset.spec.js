import Chance from 'chance';
import deepFreeze from 'deepfreeze';

const chance = new Chance();

describe('Chance.pickSubset', () => {
    let subset,
        givenArray;

    beforeEach(() => {
        givenArray = chance.n(chance.word, chance.d4());
        deepFreeze(givenArray);

        subset = chance.pickSubset(givenArray)
    });

    test('should pick a subset', () => {
        expect(givenArray).toEqual(expect.arrayContaining(subset));
    });

    describe('when array contains 1 item', () => {
        beforeEach(() => {
            givenArray = [chance.word];
            deepFreeze(givenArray);

            subset = chance.pickSubset(givenArray)
        });

        test('should pick at least one item', () => {
            expect(subset).toHaveLength(1);
        });
    });

    describe('when array is empty', () => {
        beforeEach(() => {
            givenArray = [];
            deepFreeze(givenArray);

            subset = chance.pickSubset(givenArray)
        });

        test('should pick at least one item', () => {
            expect(subset).toHaveLength(0);
        });
    });

    describe('when proper subset', () => {
        beforeEach(() => {
            givenArray = [chance.word()];
            deepFreeze(givenArray);

            subset = chance.pickSubset(givenArray, {proper: true});
        });

        test('should have a length less than the given array', () => {
            expect(subset.length).toBeLessThan(givenArray.length)
        });

        describe('when array is empty', () => {
            test('should throw an error', () => {
                expect(() => chance.pickSubset([], {proper: true})).toThrow('Chance: Cannot create a proper subset of an empty array');
            });
        });
    });
});
