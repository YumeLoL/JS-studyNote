// shallow copy：means that certain (sub)values are still connected to the original variable. point to the same memory location
var m = { a: 15, b: 20 };
var n = m;
n.a = 12;
// console.log(m === n) //true
// console.log(m, n);

// deep copy: means that all of the values of the new variable are copied and disconnected from the original variable. point to the different memory location.
var a = { a: 10, b: 20 };
var b = { a: a.a, b: a.b };
b.a = 11;
// console.log(a === b) // false
// console.log(a, b);

// https://juejin.cn/post/7072528644739956773
var obj1 = {
  name: "yume",
  phone: 3333,
  address: { street: "11 ashwood dr.", state: "vic" }
};
// var obj2= {...obj1} // spread operator can only do deep copy in first layer
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.street = "13 box hill";
// console.log(obj1 === obj2)
console.log(obj1, obj2);
