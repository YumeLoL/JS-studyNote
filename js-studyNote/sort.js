// sort the arry of numbers

const nums = [5, 3, 1, 2, 9, 8];
const result = nums.sort((a, b) => a - b);

console.log(nums);
console.log(result);

// sort array of objects by author's lastname
const books = [
  { name: "book one", author: "yume li" },
  { name: "book two", author: "mafumi Jian" },
  { name: "book trhee", author: "Ella mei" }
];

books.sort((book1, book2) => {
  const authorN1 = book1.author.split(" ")[1];
  const authorN2 = book2.author.split(" ")[1];
  console.log("d", authorN1);
  return authorN1 < authorN2 ? 1 : -1;
});
console.log(books);
