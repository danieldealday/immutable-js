const { List } = require('immutable');
const assert = require('assert');

// * methods that generally mutate data returns an immutable data structure instead
const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);

console.log(
  list1.size,
  list2.size,
  list3.size,
  list4.size,
  list4.get(0),
);