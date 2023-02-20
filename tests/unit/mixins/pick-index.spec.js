import Chance from 'chance';
import chanceMixins from "../../../src/index.js";

const chance = new Chance();

chanceMixins(chance);

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
