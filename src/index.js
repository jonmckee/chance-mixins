import partition from './mixins/partition';
import object from './mixins/object';
import pickSubset from './mixins/pick-subset';
import pickIndex from './mixins/pick-index';

export default (chance) => chance.mixin({
    object: object(chance),
    partition: partition(chance),
    pickIndex: pickIndex(chance),
    pickSubset: pickSubset(chance)
});
