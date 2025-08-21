const removeDuplicates = (arr) => {
    return [... new Set(arr)];
}

const rm = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(rm);
