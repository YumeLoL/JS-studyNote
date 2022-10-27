// write a function which helps to achieve multiply(a)(b) and returns product of a and b - currying 局部嵌套
const sum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
// const multiply = (a) => (b) => a * b;

console.log(sum(2)(3)(4));

// why we need this such strage notation - it is regarding to Currying.
// create a currying function - Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions.
// 函数柯里化：https://www.youtube.com/watch?v=vU3MVB5IxUY&t=4s
// 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
// React中的应用，例如
{
  /* <form onSubmit={onSubmit}>
  <input onChange={saveFormData} type="text" name="username" />
  <input onChange={saveFormData} type="password" name="password" />
  <button>login</button>
</form>; */
}
