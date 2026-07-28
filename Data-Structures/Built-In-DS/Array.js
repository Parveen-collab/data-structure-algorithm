/*

## Array
* An array is a data structure that can hold a collection of values.
* Arrays can contain a mix of different data types. You can store strings, booleans, numbers, or even objects all in the same array.
* Arrays are resizable. You don't have to declare the size of an array before creating it.
* JavaScript arrays are zero-indexed and the insertion order is maintained.
* Arrays are iterable. They can be used with a `for...of` loop.

*/


const arr = [1, 2, 3, 'Vishwas']

arr.push(4) //add at the end
arr.unshift(0) //add at the beginning
arr.pop() //remove from the end
arr.shift() //remove from the beginning

for (const item of arr) {
  console.log(item)
}

// map, filter, reduce, concat, slice and splice
/*
These are some of the most commonly used JavaScript array methods. Let's understand each one with examples.

---

# 1. `map()`
### Purpose = Creates a **new array** by applying a function to every element.
* Does **not** modify the original array.
* Returns an array of the **same length**.

### Example

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

Output = [2, 4, 6, 8]

Original array remains unchanged.
console.log(numbers); //[1, 2, 3, 4]

### Real-life Example
const users = [
  { name: "Parveen", age: 26 },
  { name: "Rahul", age: 22 }
];

const names = users.map(user => user.name);
console.log(names); //["Parveen", "Rahul"]

# 2. `filter()`

### Purpose = Returns a new array containing only the elements that satisfy a condition.
* Original array remains unchanged.
* Result can be smaller than the original.

### Syntax
array.filter((element) => {
    return condition;
})

### Example
const numbers = [1,2,3,4,5,6];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); //[2,4,6]
```

### Real-life Example
const employees = [
  {name:"A", active:true},
  {name:"B", active:false},
  {name:"C", active:true}
];

const activeEmployees = employees.filter(emp => emp.active);
console.log(activeEmployees);
 Output:
[
 {name:"A", active:true},
 {name:"C", active:true}
]

# 3. `reduce()`

### Purpose = Reduces an array into a **single value**.

That value can be:
* Sum
* Product
* Average
* Object
* Array
* String

### Syntax
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);

### Example 1: Sum

const numbers = [1,2,3,4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); //10

### Example 2: Find Maximum

const numbers = [5,2,8,1];
const max = numbers.reduce((acc, num) => {
    return num > acc ? num : acc;
});
console.log(max); //8

# 4. `concat()`
### Purpose = Combines two or more arrays. Returns a **new array**.

### Syntax
array1.concat(array2);

### Example
const a = [1,2];
const b = [3,4];
const result = a.concat(b);
console.log(result); //[1,2,3,4]

console.log(a); //[1,2]

You can concatenate multiple arrays.
const result = a.concat(b, [5,6]); //[1,2,3,4,5,6]

# 5. `slice()`

### Purpose = Extracts part of an array.
* Doesn't modify original array.
* Returns a new array.

array.slice(start, end);

`end` is **not included**.

### Example

const arr = [10,20,30,40,50];
const result = arr.slice(1,4);
console.log(result); //[20,30,40]


### More Examples

First three elements
arr.slice(0,3); //[10,20,30]

Last two elements
arr.slice(-2); //[40,50]

# 6. `splice()`

### Purpose = Adds, removes, or replaces elements **in the original array**.

Unlike `slice()`, it **modifies the array**.

### Syntax
array.splice(start, deleteCount, item1, item2, ...)

### Remove Elements
const arr = [10,20,30,40,50];
arr.splice(1,2);
console.log(arr); //[10,40,50]

### Insert Elements
const arr = [10,20,30];
arr.splice(1,0,15);
console.log(arr); //[10,15,20,30]

### Replace Elements

const arr = [10,20,30];
arr.splice(1,1,25);
console.log(arr); //[10,25,30]
*/

/*
## Array - Big-O Time Complexity

* Insert / remove from end — **O(1)**
* Insert / remove from beginning — **O(n)**
* Access — **O(1)**
* Search — **O(n)**
* Push / pop — **O(1)**
* Shift / unshift / concat / slice / splice — **O(n)**
* `forEach` / `map` / `filter` / `reduce` — **O(n)**

*/