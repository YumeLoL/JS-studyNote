// 2. remove all duplicates in the array
const arr = [1, 1, 2, 2, 3, 5, 6, 6, 8];

// 方法一
// new Set() - 集合是由一组无序且唯一(即不能重复)的项组成的，可以想象成集合是一个既没有重复元素，也没有顺序概念的数组
const uniqueA = (arr) => [...new Set(arr)];
console.log("uniqueA:", uniqueA(arr));


// 方法二
// forEach & includes()
const removeDuplicates = (arr) => {
  const result = [];

  arr.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });

  return result;
};

console.log("removeDuplicates:", removeDuplicates(arr));
