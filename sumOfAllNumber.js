const sumOfArray = (arr) => {
     if(!Array.isArray(arr) || arr.length === 0) {
        return "Input must be a non-empty array"
    }

    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== 'number') {
            return "Array must contain only numbers";
        }
        sum += arr[i];
    }
    return sum;
}

const sum = sumOfArray([1, 2, 3, 4, 5]);
console.log(sum); 