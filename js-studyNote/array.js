// write a function which get an array and an element and return an array with this element at the end
const number = [1, 5, 4, 6];

const append1 = (arr, element) => [...arr, element];

// don't recommend to use push function, it will modify the original data
const append2 = (arr, element) => {
  arr.push(element);
  return arr;
};

const test = append1(number, "sd");

console.log("original:", number);
console.log("new arr:", test);

// write a function which can concatenate 2 arrayrs
const arr1 = [1, 53, 6, 4, 4];
const arr2 = ["sdgs", "wert", 6, 4, "wedtw"];

const mergeArr = (obj1, obj2) => {
  return [...obj1, ...obj2];

  // return obj1.concat(...obj2);

  // obj1.push(...obj2) // don't recommend
  // return obj1
};

const newMerge = mergeArr(arr1, arr2);

console.log("original:", arr1, arr2);
console.log("new concatenate arr:", newMerge);
