const withIncludedValues = (obj, [key, value]) => {
    if (typeof value === 'function') {
        obj[key] = value();
    } else {
        obj[key] = value;
    }

    return obj;
};

export default (chance) => (include = {}) => {
    const object = {
        [chance.word()]: chance.word()
    };

    return Object.entries(include).reduce(withIncludedValues, object);
};
