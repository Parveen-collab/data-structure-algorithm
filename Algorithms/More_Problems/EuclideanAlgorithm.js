/*
Finding the GCD using the Euclidean Algorithm

Problem
Given two positive integers, find their Greatest Common Divisor (GCD).
The GCD is the largest number that divides both numbers without leaving a remainder.

Example
Input:
a = 48
b = 18

Output:
6

Applications:
Simplifying fractions
Cryptography (RSA)
Number theory
*/

function EuclideanAlgorithm(a, b) {
    /*
    1.find which one is greater
    2.greater number will be the dividend with smaller will be divisor and store the remainer
    3.check the remainder if it is a zero. if it is a zero then divisor is the GCD. if not
    4.now dividend will be the divisor of the previous division and divisor will be the reaminder of the previous division. store the remainder
    5.check the remainder if it is a zero. if it is a zero then divisor is the GCD. if not
    6.repeat the step 4
    */
    let r;
    let dividend;
    let divisor;

    if (a > b) {
        dividend = a;
        divisor = b;
    } else {
        dividend = b;
        divisor = a;
    }

    do {
        r = dividend % divisor
        if (r !== 0) {
            dividend = divisor;
            divisor = r;
        }
    } while (r !== 0)

    return divisor;
};



console.log(EuclideanAlgorithm(5, 10)); //5
console.log(EuclideanAlgorithm(3, 7)); //1
console.log(EuclideanAlgorithm(36, 18)); //18

// function EuclideanAlgorithm(a, b) {
//     while (b !== 0) {
//         let r = a % b;
//         a = b;
//         b = r;
//     }

//     return a;
// }

// console.log(EuclideanAlgorithm(5, 10));   // 5
// console.log(EuclideanAlgorithm(3, 7));    // 1
// console.log(EuclideanAlgorithm(36, 18));  // 18

//Time Complexity Big-O = O(log(min(a,b)))
//Space Complexity Big-O = O(1)