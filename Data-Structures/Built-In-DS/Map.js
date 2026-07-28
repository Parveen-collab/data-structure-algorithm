/*
## Map

* A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
* To retrieve a value, you can use the corresponding key.
* Maps are iterables. They can be used with a `for...of` loop.

---

## Object vs Map

* Objects are unordered, whereas Maps are ordered.
* Keys in Objects can only be of **string** or **symbol** type, whereas in Maps, keys can be of **any data type**.
* An Object has a prototype and may contain a few default keys that may collide with your own keys if you're not careful. A Map, on the other hand, does not contain any keys by default.
* Objects are **not iterable**, whereas Maps are **iterable**.
* The number of items in an Object must be determined manually, whereas it is readily available with the **`size`** property in a Map.
* Apart from storing data, you can attach functionality (methods) to an Object, whereas Maps are restricted to just storing data.

*/

const map = new Map([['a', 1], ['b', 2]])

map.set('c', 3)
map.delete('c')
console.log(map.has('a'))
console.log(map.size)
map.clear()

for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}