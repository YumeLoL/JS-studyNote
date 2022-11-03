// remove all duplicates in the array
const arr = [1, 1, 2, 2, 3, 5, 6, 6, 8];

const uniqueA = (arr) => [...new Set(arr)];

const removeD = (arr) => {
  const result = [];

  arr.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });

  return result;
};

console.log("method1:", uniqueA(arr));
console.log("method2:", removeD(arr));
