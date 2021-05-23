import Chance from 'chance';
import deepFreeze from 'deepfreeze';

const chance = new Chance();

describe('Chance.partition', () => {
    let partition,
        givenArray;

    beforeEach(() => {
        givenArray = chance.n(chance.word, 3);
        deepFreeze(givenArray);

        partition = chance.partition(givenArray);
    });

    test('should return two arrays', () => {
        expect(partition).toHaveLength(2);

        expect(Array.isArray(partition[0])).toStrictEqual(true);
        expect(Array.isArray(partition[1])).toStrictEqual(true);
    });

    test('should include all original members', () => {
        const glued = [...partition[0], ...partition[1]];

        expect(glued).toHaveLength(givenArray.length);
        expect(glued).toEqual(expect.arrayContaining(givenArray));
    });

    test('should not create empty subsets', () => {
        expect(partition[0].length).toBeGreaterThan(0);
        expect(partition[1].length).toBeGreaterThan(0);
    });

    describe('when array is empty', () => {
        beforeEach(() => {
            givenArray = [];
        });

        test('should throw an error', () => {
            expect(() => chance.partition(givenArray)).toThrow('Chance: Cannot partition an empty array.');
        });
    });

    describe('when array has a single item', () => {
        beforeEach(() => {
            givenArray = [chance.word()];

            partition = chance.partition(givenArray);
        });

        test('should include the item', () => {
            expect(partition).toContainEqual(givenArray);
        });

        test('should have an empty subset', () => {
            expect(partition).toContainEqual([]);
        });
    });

    describe('when array has two items', () => {
        beforeEach(() => {
            givenArray = chance.n(chance.word, 2);

            partition = chance.partition(givenArray);
        });

        test('should include the item', () => {
            expect(partition).toContainEqual([givenArray[0]]);
        });

        test('should have an empty subset', () => {
            expect(partition).toContainEqual([givenArray[1]]);
        });
    });
});
