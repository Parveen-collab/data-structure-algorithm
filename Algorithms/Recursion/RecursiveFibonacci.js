/*
## Recursive Fibonacci Sequence
### Problem = Given a number n, find the nth element of the Fibonacci sequence.

### Definition
In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.The first two numbers in the sequence are 0 and 1.
example: 0, 1, 1, 2, 3, 5, 8, ...

Examples:
-recursiveFibonacci(0) = 0
-recursiveFibonacci(1) = 1
-recursiveFibonacci(6) = 8
*/

/* 
Tips for Recursive Solutions
-Figure out how to break down the problem into smaller versions of the same problem.
-Identify the base case for recursion. 
*/

function recursiveFibonacci(n){
    if(n<2){ // base case
        return n;
    };

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);

};

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

/*
Complexity
-Time Complexity: O(2^n) (Exponential)
-Space Complexity: O(n) (Due to the recursion call stack)
*/
