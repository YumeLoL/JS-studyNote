// 1. write code to get array of names from given array of users
// 2. get back only active users
// 3. sort users by age descending
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    isActive: true,
    username: "Bret",
    email: "Sincere@april.biz",
    age: 20
  },
  {
    id: 2,
    name: "Ervin Howell",
    isActive: true,
    username: "Antonette",
    email: "Shanna@melissa.tv",
    age: 10
  },
  {
    id: 3,
    name: "Clementine Bauch",
    isActive: false,
    username: "Samantha",
    email: "Nathan@yesenia.net",
    age: 23
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    isActive: false,
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    age: 29
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    isActive: true,
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    age: 50
  }
];

// 1.
// map function
const userName1 = users.map((obj) => obj.name);

// forEach function
const userName2 = [];
users.forEach((obj) => {
  userName2.push(obj.name);
});

// for loop function
const userName3 = [];
for (let i = 0; i < users.length; i++) {
  userName3.push(users[i].name);
}

console.log(userName1);

// 2.
// map function
const activeUsers1 = users.filter((obj) => obj.isActive).map((obj) => obj.name);

console.log("activeUsers1:", activeUsers1);

// for loop
const activeUsers2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) activeUsers2.push(users[i].name);
}
console.log("activeUsers2:", activeUsers2);

// 3.
// sort function
// map function
const descendAge = users
  .sort((obj1, obj2) => obj2.age - obj1.age)
  .filter((obj) => obj.isActive)
  .map((obj) => obj.age);

console.log("age1:", descendAge);
