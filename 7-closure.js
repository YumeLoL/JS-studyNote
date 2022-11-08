// create a counter function which has increment and getValue functionality
const counter = () =>{
    let count = 0;

    const increment = () => count++;

    const getValue = () => {
        console.log(count)
    }

    return {
        increment,
        getValue
    }
}

const countNumber = counter()
countNumber.increment()
countNumber.increment()
countNumber.increment()
countNumber.getValue()

countNumber = null

// 讲解 ：https://www.youtube.com/watch?v=ono4n3eHY24&list=PLmOn9nNkQxJH3g-GPoyAj2IB6bQ-qOeKl&index=31
// 1. 如何产生闭包？
//    当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
// 2. 闭包是什么？
//    用chrome调试查看
//    理解一：闭包是嵌套的内部函数
//    理解二：包含被引用变量（函数）的对象
//    注意：闭包存在于嵌套的内部函数中
// 3. 产生闭包的条件？
//    嵌套函数 && 内部函数引用了外部函数的数据（变量/函数）
// 4. 闭包的作用？
//    - 使用函数内部的变量在函数执行完后，仍然存活在内存中（延长了局部变量的生命周期）
//    - 让函数外部可以操作（读写）到函数内部的数据（变量/函数）
//    问题：
//        1. 函数执行完后，函数内部声明的局部变量是否还存在？ 一般是不存在，存在于闭包中的变量才可能存在
//        2. 在函数外部能直接访问函数内部的局部变量吗？ 不能，但是我们可以通过闭包让外部操作它
// 5. 缺点
//    - 函数执行完后，函数内的局部变量没有释放，占用内存时间会变长
//    - 容易造成内存泄漏
//    解决
//    - 及时释放  f = null

// example 1. 将函数作为另一个函数的返回值
function fn1() {
    var a = 2;
    function fn2() {
      a++;
      // console.log("a:", a);
    }
    return fn2;
  }
  var f = fn1();
  f();
  f();
  var g = fn1();
  g();
  g();
  g();
  // 外部函数 fn1 调用几次，就产生几次闭包。一次闭包，内部函数调用时，数据不释放，所以 a 的值增加了
  
  // example 2. 将函数作为实参传递给另一个函数调用
  function showDelay(msg, time) {
    // msg 是外部函数实参
    setTimeout(function () {
      alert(msg); // 内部函数调用外部函数的 msg， 产生闭包
    }, time);
  }
  // showDelay("alert", 2000);
  
  // example 3.
  function ex1() {
    var b = 5;
    function ex2() {
      b--;
      // console.log("b:", b);
    }
  
    function ex3() {
      b++;
      // console.log("b:", b);
    }
    return ex3;
  }
  var ex = ex1(); // var ex = ex1() 引用指向了 ex3, 因此内部的局部变量仍然存在
  ex(); // 如果只是执行 ex1() 没有指向，函数执行一次之后就不存在了
  ex();
  ex = null; //闭包死亡（包含闭包的函数对象成为了垃圾对象）