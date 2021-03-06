const { Map, List } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3, d: 4 })
const map2 = Map({ c: 10, a: 20, t: 30 })
const obj = { d: 100, o: 200, g: 300 }
const map3 = map1.merge(map2, obj);
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
const list1 = List([ 1, 2, 3 ])
const list2 = List([ 4, 5, 6 ])
const array = [ 7, 8, 9 ]
const list3 = list1.concat(list2, array)
// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(
  map1,
  map2,
  obj,
  map3,
  list1,
  list2,
  array,
  list3,
  null,
  2
)