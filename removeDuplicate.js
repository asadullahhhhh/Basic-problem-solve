const removeDuplicates = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }

  return [...new Set(arr)];
};

const rm = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(rm);
