// 1. write a function which get an array and an element and return an array with this element at the end

// 增
// 下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响
// push() - 方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度
// unshift() - 在数组开头添加任意多个值，然后返回新的数组长度
// splice() - 传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组
// concat() - 首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组

const arr = [1, 5, 4, 6];

const addFunc = (arr, element) => {
  return [...arr, element];
//   return arr.concat(element)
};

console.log(addFunc(arr,'yume'))
