// immutable Map data structure module required from 'immutable'
const { Map } = require('immutable');

// * creates a new Map data structure and assigns it to const 'map1'
const map1 = Map({ a: 1, b: 2, c: 3 });
// * creates a new Map data structure based off of 'map1'
// * takes the original map and sets a new value to the key
const map2 = map1.set('b', 50);
// * retrieves values from both data structures
const result = map1.get('b') + " vs. " + map2.get('b');

/// * visual representation of saved data
console.log(map1);
console.log(map2);
console.log(result);