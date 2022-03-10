import Chance from 'chance';
const chance = new Chance();

describe('Chance.object', () => {
    let object;

    beforeEach(() => {
        object = chance.object();
    });

    it('should be an object', () => {
        expect(typeof object).toStrictEqual('object');
    });

    it('should have at least one key', () => {
        expect(Object.keys(object)).toHaveLength(1);
    });

    describe('when data is included', () => {
        let keys, values;

        beforeEach(() => {
            keys = chance.unique(chance.word, chance.d4(), {});
            values = chance.n(chance.string, keys.length);
        });

        describe('when values are provided', () => {
            beforeEach(() => {
                const include = keys.reduce((accum, key, i) => {
                    accum[key] = values[i]

                    return accum;
                }, {});

                object = chance.object(include);
            });

            it('should have the expected key: value pairs', () => {
                keys.forEach((key, i) => {
                    expect(object[key]).toStrictEqual(values[i]);
                });
            });
        });

        describe('when functions are provided', () => {
            beforeEach(() => {
                const include = keys.reduce((accum, key, i) => {
                    accum[key] = () => values[i]

                    return accum;
                }, {});

                object = chance.object(include);
            });

            it('should have the expected key: value pairs', () => {
                keys.forEach((key, i) => {
                    expect(object[key]).toStrictEqual(values[i]);
                });
            });
        });
    });
});
