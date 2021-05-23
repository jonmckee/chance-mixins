export default (chance) => (arr) => {
    if (!arr.length) {
        throw new Error('Chance: Cannot partition an empty array.');
    } else if (arr.length === 1) {
        const [item] = arr;
        return chance.shuffle([
            [item],
            []
        ]);
    } else if (arr.length === 2) {
        return chance.shuffle([
            [arr[0]],
            [arr[1]]
        ]);
    }

    const pivot = chance.integer({min: 1, max: arr.length - 2});

    const _arr = [...arr];

    return [
        _arr.slice(0, pivot),
        _arr.slice(pivot)
    ];
}
