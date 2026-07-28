/*
## Object

* An object is an unordered collection of key-value pairs.
* The key must either be a **string** or **symbol** data type, whereas the value can be of **any data type**.
* To retrieve a value, you can use the corresponding key. This can be achieved using **dot notation** or **bracket notation**.
* An object is **not iterable**. You cannot use it with a `for...of` loop.

*/

const obj = {
    name: 'Heisenberg',
    age: 25,
    "key-three": true,
    sayMyName: function () {
        console.log(this.name)
    }
}

obj.hobby = 'football'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)

obj.sayMyName()

// Object.keys(), .values(), .entries()
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/*
## Object - Big-O Time Complexity

* Insert — **O(1)**
* Remove — **O(1)**
* Access — **O(1)**
* Search — **O(n)**
* `Object.keys()` — **O(n)**
* `Object.values()` — **O(n)**
* `Object.entries()` — **O(n)**

*/