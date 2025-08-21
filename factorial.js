function factorial(n) {
    if (typeof n !== "number" || n < 0) {
        return "Input must be a non-negative integer";
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; 
    }

    return result;
}

console.log(factorial(5));
