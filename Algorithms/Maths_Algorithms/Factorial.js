// # Factorial of a Number
// **Problem** - Give an integer **`n`**, find the factorial of that integer.
// In mathematics, the factorial of a non-negative integer **`n`**, denoted **`n!`**, is the product of all positive integers less than or equal to **`n`**.
// Factorial of zero is **1**.

function Factorial(n){
    if(n===0){
        return 1;
    };

    if(n<0){
        return n;
    };

    let fact = 1;

    for(let i=2; i<=n; i++){
        fact = fact*i;
    }

    return fact;
}


factorial(4) // 4 * 3 * 2 * 1 = 24
factorial(5) // 5 * 4 * 3 * 2 * 1 = 120