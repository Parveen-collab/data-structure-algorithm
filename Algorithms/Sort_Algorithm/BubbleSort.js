/* 
**Bubble Sort**

**Problem** – Given an array of integers, sort the array.

```javascript
const arr = [-6, 20, 8, -2, 4];

bubbleSort(arr); // Should return [-6, -2, 4, 8, 20]
```
*/

/* 
## Bubble Sort Example

```text
[-6 20 8 -2 4]

[-6 20 8 -2 4] → [-6 8 20 -2 4]   Swap since 20 > 8

[-6 8 20 -2 4] → [-6 8 -2 20 4]   Swap since 20 > -2

[-6 8 -2 20 4] → [-6 8 -2 4 20]   Swap since 20 > 4

End of array. Elements swapped? Yes? Repeat the comparison.

[-6 8 -2 4 20]

[-6 8 -2 4 20] → [-6 -2 8 4 20]   Swap since 8 > -2

[-6 -2 8 4 20] → [-6 -2 4 8 20]   Swap since 8 > 4

[-6 -2 4 8 20]

End of array. Elements swapped? Yes? Repeat the comparison.

[-6 -2 4 8 20], [-6 -2 4 8 20], [-6 -2 4 8 20], [-6 -2 4 8 20]
```
*/

function bubbleSort(arr) {

    let swapped;

    // use of loop
    do {
        swapped=false;
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr.lenght < 1) {
                return arr;
            };
            if (arr[i] > arr[i + 1]) {

                // swaping concept
                let temp = arr[i];  // temp = 20
                arr[i] = arr[i + 1];    // arr[1] becomes 8
                arr[i + 1] = temp;      // arr[2] becomes 20

                console.log(arr);
                swapped=true;

            }
        };
    } while(swapped);

    return arr;

    // pointer technique
    // check if swaping happens or not 
};

console.log(bubbleSort([-6, -2, 4, 8, 20]));

// Big-O time complexity = O(n*n)
