/*
Recursive Factorial of a Number 
Problem = Given an integer n, find the factorial of that integer.

### Definition

The factorial of a non-negative integer n, denoted n!, is the product of all positive integers less than or equal to n.
The factorial of 0 is 1.

Examples
console.log(RecursiveFactorial(4)) // 4 × 3 × 2 × 1 = 24
console.log(RecursiveFactorial(5)) // 5 × 4 × 3 × 2 × 1 = 120
*/

function RecursiveFactorial(n){
    if(n===0){
        return 1;
    };

    return n * RecursiveFactorial(n-1);
};

console.log(RecursiveFactorial(4)) // 4 × 3 × 2 × 1 = 24
console.log(RecursiveFactorial(5)) // 5 × 4 × 3 × 2 × 1 = 120
//Big-O = O(n)