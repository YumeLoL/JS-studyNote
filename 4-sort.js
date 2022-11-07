// sort the arry of numbers
const nums = [5, 3, 1, 2, 9, 8];
const sortFunc = (arr) => {
  arr.sort((a, b) => a - b); // 如果是number array，可以这样简写
  return arr;
};
sortFunc(nums);
console.log(nums);

// sort array of objects by author's lastname
const books = [
  { name: "book one", author: "yume li" },
  { name: "book two", author: "mafumi Jian" },
  { name: "book trhee", author: "Ella mei" },
  { name: "book four", author: "Eli Bea" },
];


console.log(books[0].author.split("")); 

// function
const sortByName = (arr) => {
  arr.sort((a, b) => {
    return a.author.split(" ")[1] - b.author.split(" ")[1] ? -1 : 1; //不是number array, 要写全
  });
  return arr;
};
console.log("sort by lastname:", sortByName(books));


// const sortByName = books.sort((a, b) => {
//   return b.author.split(" ")[1] - a.author.split(" ")[1] ? 1 : -1;
// });
// console.log(sortByName);