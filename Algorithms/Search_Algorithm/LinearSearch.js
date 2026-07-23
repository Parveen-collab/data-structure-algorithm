/* 
Linear Search
Problem – Given an array of `n` elements and a target element `t`, find the index of `t` in the array. Return `-1` if the target element is not found.

**Examples:**

```text
arr = [-5, 2, 10, 4, 6], t = 10
Output: 2
```

```text
arr = [-5, 2, 10, 4, 6], t = 6
Output: 4
```

```text
arr = [-5, 2, 10, 4, 6], t = 20
Output: -1
```
*/

function LinearSearch(arr, t) {

    for (let i = 0; i< arr.length - 1; i++) {
        if (t === arr[i]) {
            return i;
        }
    };
    return -1;
};

console.log(LinearSearch([1,3,2,9,6,5,7,67], 12)); //-1
console.log(LinearSearch([1,3,2,9,6,5,7,67], 2)); // 2
console.log(LinearSearch([1,3,2,9,6,5,7,67], 7)); //6