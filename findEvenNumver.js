const findEvenNumbers = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }

  const evernNumvers = arr.filter(
    (num) => typeof num === "number" && num % 2 === 0
  );

 return evernNumvers 
};

const ev = findEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(ev); 
