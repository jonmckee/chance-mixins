# chance-mixins

Custom mixins for [chance](https://chancejs.com/), a javascript library for creating randomized data.

## Installation

```bash
npm install @jonmckee/chance-mixins
```

## Setup

```es6
import Chance from 'chance';
import chanceMixins from '@jonmckee/chance-mixins';

const chance = new Chance();
chanceMixins(chance);
```

## Usage

```es6
// Create an object with a random key and value
chance.object();
=> { upe: 'dafpiwoc' }

// Given an array, return a random index within the bounds
chance.pickIndex(['cat', 'dog', 'mouse', 'dinosaur']);
=> 2

// Given an array, select a random subset of items in that array
chance.pickSubset(['cat', 'dog', 'mouse', 'goomba', 'alien']);
=> ['cat', 'goomba', 'alien']

// Given an array, make sure the selected subset is missing at least 1 element from the given array
chance.pickSubset([1, 2, 3, 4, 5], {proper: true});

// Given an array, partition it into two subsets
chance.partition(['cat', 'dog', 'mouse', 'goomba', 'alien']);
=> [['cat', 'dog'], ['mouse', 'goomba', 'alien']]
```

### Contributing
Pull requests are welcome. For major changes, please open an issue to discuss what you would like to add.

Please make sure to update tests and this README as appropriate.
