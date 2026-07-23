/* 
Binary Search
Problem – Given an sorted array of `n` elements and a target element `t`, find the index of `t` in the array. Return `-1` if the target element is not found.

**Examples:**

```text
arr = [-5, 2, 4, 6, 10], t = 10
Output: 4
```

```text
arr = [-5, 2, 4, 6, 10], t = 6
Output: 4
```

```text
arr = [-5, 2, 4, 6, 10], t = 20
Output: -1
```
*/

/* 
Pseud Code for Binary Search
# Binary Search Pseudocode

* If the array is empty, return `-1` as the element cannot be found.

* If the array has elements, find the **middle element** in the array. If the target is equal to the middle element, return the **middle element index**.

* If the target is **less than** the middle element, perform a binary search on the **left half** of the array.

* If the target is **greater than** the middle element, perform a binary search on the **right half** of the array.

### Example

```text
Array:  [-5, 2, 4, 6, 10]
Target: 6

Step 1:
Middle = 4 (index 2)
Since 6 > 4, search the right half.

Remaining Array: [6, 10]

Step 2:
Middle = 6 (index 3)
Target found.

Output:
Index = 3
```

*/

function BinarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === arr[middleIndex]) {
            return middleIndex
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1
}

console.log(BinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6))  // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)) // -1

// Big-O = O(log n)