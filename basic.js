// var、let、const三者区别可以围绕下面五点展开：
// 变量提升 - var 声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined. let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错
// 暂时性死区 - var不存在暂时性死区. let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
// 块级作用域 - var不存在块级作用域. let和const存在块级作用域
// 重复声明 - var允许重复声明变量. let和const在同一作用域不允许重复声明变量
// 修改声明的变量 - var和let可以. const声明一个只读的常量。一旦声明，常量的值就不能改变
// 使用 - 能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var


// var
// 使用var声明的变量存在变量提升的情况 hoisting
console.log(a) // undefined
var a = 20
// 在编译阶段，编译器会将其变成以下执行
var a
console.log(a)
a = 20

// 只有var可以重复声明，后面声明的变量会覆盖前面的变量声明
var a = 20 
var a = 30
console.log(a) // 30

// 
var rate = 10;
function getRate() {
  if (rate === undefined) {
    var rate = 6;
    return rate;
  } 
  else {
    return rate;
  }

}

console.log("rate is", getRate()); // 6

// let
// 不存在变量提升
// let不允许在相同作用域中重复声明
console.log(a) // 报错ReferenceError
let a = 2

// const 
// const声明一个只读的常量，一旦声明，常量的值就不能改变
// const一旦声明变量，就必须立即初始化，不能留到以后赋值
const a = 1
a = 3
// TypeError: Assignment to constant variable.


// const 的数组和对象可以改变，只是常量不能改变
const user = {name: 'John', age:0}
user.address = '11 ahswood dr'
const num = [1,2,3]
num.push(0)
console.log(num)
console.log(user)
