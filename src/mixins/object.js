export default (chance) => (options = {}) => {
    let valueFunction = () => chance.word();

    if (options.as) {
        valueFunction = options.as;
    }

    let object = {
        [chance.word()]: valueFunction()
    };

    if (options.withKeys) {
        const objWithKeys = options.withKeys.reduce((accum, key) => {
            accum[key] = valueFunction();

            return accum;
        }, {});

        object = {
            ...object,
            ...objWithKeys
        };
    }

    if (options.with) {
        object = {
            ...object,
            ...options.with
        };
    }

    return object;
};
