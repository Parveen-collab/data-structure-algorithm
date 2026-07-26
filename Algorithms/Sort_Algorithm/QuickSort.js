/*
## Quick Sort Idea

Identify the **pivot element** in the array.
* Pick the first element as the pivot.
* Pick the last element as the pivot (**our approach**).
* Pick a random element as the pivot.
* Pick the median as the pivot.

Put everything that's **smaller** than the pivot into a **left** array and everything that's **greater** than the pivot into a **right** array.

Repeat the process for the individual **left** and **right** arrays until you have an array of length **1**, which is sorted by definition.

Repeatedly concatenate the **left array**, **pivot**, and **right array** until one sorted array remains.
*/

/*
// concept of Recursion
base case arr.length == 1
variables to be used = pivot element, leftArr, rightArr, sorted array
concept of concatenation
*/

function quickSort(arr) {

    if(arr.length<2){
        return arr;
    };

    let pivot = arr[arr.length - 1]

    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push = arr[i];
        } else (rightArr.push = arr[i]);
    };

    return [...leftArr, pivot, ...rightArr]
};

// worst case = O(n*n)
// avg case = O(nlogn)

console.log(quickSort([8, 20, -2, 4, -6]));