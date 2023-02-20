import Chance from 'chance';
import chanceMixins from "../../src/index.js";

const chance = new Chance();

chanceMixins(chance);

describe('when importing chance-mixins', () => {
    it.each([
        'object',
        'partition',
        'pickIndex',
        'pickSubset'
    ])
    ('should include all of the mixins', (name) => {
        expect(typeof chance[name]).toStrictEqual('function');
    });
});
