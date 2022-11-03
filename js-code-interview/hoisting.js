// what will be console.logged here

// Q1.
// console.log('line 4:',foo);
// foo = 1;

//  Q2.
// console.log('line 8:',foo);
// var foo = 2;

// Q3.
// foo = 3;
// console.log('line 13:',foo);
// var foo; // bubble to the top

// Q4.
// var foo;
// function foo () {}
// the function will bubble to the top, it doesn't really matter in what line of your code you are writing function for it. it will be the first line that will be executed.

// we can use const and let, we don't have any problem with them because both of them are not bubbling at all.

// https://github.com/febobo/web-interview/issues/34
// 使用var声明的变量存在变量提升的情况
// 使用var，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明
// 在函数中使用使用var声明变量时候，该变量是局部的, 而如果在函数内不使用var，该变量是全局的

var rate = 10;
function getRate() {
  if (rate === undefined) {
    var rate = 6;
    return rate;
  } else {
    return 10;
  }
}

console.log("rate is", getRate()); // 6

// let 不存在变量提升, 只在let命令所在的代码块内有效
// 只要块级作用域内存在let命令，这个区域就不再受外部影响

function test2() {
  let b = 1;
  {
    // console.log("value b is:", b);
    let b = 2;
  }
  // console.log("value b is:", b);
}
test2();

{
  func();
  function func() {
    console.log("letVal:", letVal);
  }
  let letVal = 3;
  // console.log("letVal:", letVal)
}
// array function is not gonna hoisted
