import Chance from 'chance';
import {jest} from '@jest/globals'

const chance = new Chance();

describe('Chance.object', () => {
    let object;

    beforeEach(() => {
        object = chance.object();
    });

    test('should be an object', () => {
        expect(typeof object).toStrictEqual('object');
    });

    test('should have at least one key', () => {
        expect(Object.keys(object)).toHaveLength(1);
    });

    describe('when including other data', () => {
        beforeEach(() => {
            object = chance.object({
                with: {
                    [chance.word()]: chance.word()
                }
            });
        });

        test('should include that data in the object', () => {
            expect(Object.keys(object)).toHaveLength(2);
        });
    });

    describe('when including keys', () => {
        let withKeys;

        beforeEach(() => {
            withKeys = chance.n(chance.word, chance.d4());

            object = chance.object({
                withKeys
            });
        });

        test('should include those keys with random values', () => {
            expect(Object.keys(object)).toStrictEqual(expect.arrayContaining(withKeys));
        });
    });

    describe('when value types are dictated', () => {
        let asFunction,
            expectedValue;

        beforeEach(() => {
            expectedValue = chance.natural();
            asFunction = jest.fn(() => expectedValue);

            object = chance.object({
                as: asFunction
            });
        });

        test('should use provided function', () => {
            expect(asFunction).toHaveBeenCalledTimes(1);
        });

        test('should have values of those types', () => {
            const values = Object.values(object);

            values.forEach((value) => {
                expect(value).toStrictEqual(expectedValue);
            });
        });
    });

    test('smoke', () => {
        object = chance.object({
            withKeys: ['a', 'b', 'c'],
            as: () => chance.natural(),
            with: {
                'd': 0
            }
        });
        
    });
});
