import Chance from 'chance';

const chance = new Chance();

describe('Chance.object', () => {
    let object;

    beforeEach(() => {
        object = chance.object();
    });

    test('should be an object', () => {
        expect(typeof object).toStrictEqual('object');

        expect(Object.keys(object)).toHaveLength(1)
    });
});
