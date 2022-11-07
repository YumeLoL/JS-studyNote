// 5. check that user with such name exists in arrary of objects
const users = [
  {
    id: 1,
    name: "Yme",
    isActive: true,
  },
  {
    id: 2,
    name: "Ella",
    isActive: false,
  },
  {
    id: 3,
    name: "Mafumi",
    isActive: true,
  },
];


const checkExist = (arr, name) => {
  let exist = false;
  const nameValue = name.toLowerCase().trim();  // trim if there is space

  arr.forEach((obj) => {
    if (obj.name.toLowerCase() === nameValue) exist = true;
  });
  return exist;
};

console.log("check name exists:", checkExist(users, " mafumi "));
