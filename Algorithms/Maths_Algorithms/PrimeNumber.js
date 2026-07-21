// **Prime Number**
// **Problem** – Give a natural number `n`, determine if the number is prime or not.
// A prime number is a natural number greater than **1** that is **not a product of two smaller natural numbers**.
// **Examples:**
// isPrime(5) = true   (1 × 5 or 5 × 1)
// isPrime(4) = false  (1 × 4 or 2 × 2 or 4 × 1)

/*function isPrime(n) {

    if(n<2){
        return false;
    };

    for(let i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }

    return true;
};*/
//Big-O = O(n)


//More Optimized Solution
function isPrime(n){
    if(n<2){
        return false;
    };

    for(let i=2; i<Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        };
    };

    return true;
};
//Big-O = O(sqrt(n))

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(26));
console.log(isPrime(113));