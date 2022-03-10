import mixins from '../../src/index';
import Chance from 'chance';

const chance = new Chance();
mixins(chance);

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
