

const findMaxInArray = (arr) => {
    if(!Array.isArray(arr) || arr.length === 0) {
        return "Input must be a non-empty array"
    }

    let max = arr[1]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    return max 
}

const max = findMaxInArray([3, 5, 7, 2, 8, 1, 50, 88, 23]);
console.log(max);