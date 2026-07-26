/*
## Insertion Sort Idea

* Virtually split the array into a **sorted** and an **unsorted** part.
* Assume that the **first element is already sorted** and the remaining elements are unsorted.
* Select an unsorted element and compare it with all the elements in the sorted part.
* If the elements in the sorted part are **smaller** than the selected element, proceed to the next element in the unsorted part. Else, **shift larger elements** in the sorted part towards the right.
* Insert the selected element at the **right index**.
* Repeat until all the unsorted elements are placed in the correct order.

*/

/*
Variables to be used = unsortedArr, sortedArray, numberToBeInserted, sorteeElement
use of loop (may be also nested loop)
concept of array
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = numberToInsert;
    }
}

// Big-O time complexity = O(n*n)

const arr = [8, 20, -2, 4, -6];

insertionSort(arr);

console.log(arr); // [-6, -2, 4, 8, 20]
