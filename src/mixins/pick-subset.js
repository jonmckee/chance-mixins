export default (chance) => (arr, options = {}) => {
    if (options.proper) {
        if (!arr.length) {
            throw new Error('Chance: Cannot create a proper subset of an empty array');
        }

        const toRemove = chance.pickIndex(arr);
        const properSubset = arr.filter((_, i) => i !== toRemove);

        return chance.pickSubset(properSubset);
    } else {
        if (!arr.length) {
            return [];
        } else if (arr.length === 1) {
            return [arr[0]];
        }

        return chance.pickset(arr, chance.integer({min: 1, max: arr.length - 1}));
    }
};
