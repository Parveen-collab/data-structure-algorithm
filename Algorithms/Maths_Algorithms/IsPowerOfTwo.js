// Power of Two
// **Problem** – Give a positive integer `n`, determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer `x` such that:
// n == 2^x

// **Examples:**
// isPowerOfTwo(1) = true   (2^0)
// isPowerOfTwo(2) = true   (2^1)
// isPowerOfTwo(5) = false

/*function isPowerOfTwo(n){

    if(n<=0){
        return false;
    };

    for(let i = 1; i<n; i++){
        if(n%2!==0){
            return false;
        };
    };

    return true;
};*/
//Big-O = O(log(n))

//optimized solution
function isPowerOfTwo(n){
    if(n<=0){
        return false;
    };

    while(n>1){
        if(n%2!==0){
            return false;
        };
        n=n/2;
    };

    return true;

};
//Big-O = O(log(n))

//more optimized solution
/*function isPowerOfTwoBitwise(n){
    if(n<=0){
        return false;
    };

    for(let i=1; i<n; i++){
        return (n & (n-1)) !== 0
    };
}*/
//Big-O = O(1)

/*console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(3));
console.log(isPowerOfTwoBitwise(4));
console.log(isPowerOfTwoBitwise(5));*/

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));