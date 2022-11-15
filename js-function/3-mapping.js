// 1. write code to get array of names from given array of users
// 2. get back only active users
// 3. sort users by age descending
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Ervin Howell",
    isActive: true,
    age: 10,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    isActive: false,
    age: 23,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    isActive: false,
    age: 29,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    isActive: true,
    age: 50,
  },
];

//  map function or forEach function
const allNames = (arr) => {
  const names = [];
  arr.map((obj) => {
    names.push(obj.name);
  });
  return names;
};
console.log("allNames:", allNames(users));

//   or
const allUserNames = users.map((obj) => obj.name);
console.log("allUserNames:", allUserNames);


