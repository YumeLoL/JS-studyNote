// check that user with such name exists in arrary of objects
const users = [
  {
    id: 1,
    name: "Yme",
    isActive: true
  },
  {
    id: 2,
    name: "Ella",
    isActive: false
  },
  {
    id: 3,
    name: "Mafumi",
    isActive: true
  }
];

const checkName = (users, element) =>
  users.some((user) => user.name.toLowerCase().includes(element.toLowerCase()));

console.log(checkName(users, "mafumi"));

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // 3,4,5,4,3
