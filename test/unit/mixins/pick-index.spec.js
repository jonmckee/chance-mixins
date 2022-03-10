import Chance from 'chance';

const chance = new Chance();

describe('Chance.pickIndex', () => {
    let index,
        givenArray;

    beforeEach(() => {
        givenArray = chance.n(chance.word, chance.d4());

        index = chance.pickIndex(givenArray);
    });

    test('should pick an index', () => {
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(givenArray.length);
    });
});
