// 6. write a function which helps to achieve multiply(a)(b) and returns product of a and b - currying 局部嵌套
const sum = (a) => {
    return (b) => {
        return a + b
    }
}
console.log(sum(3)(6))

// const multiply = (a) => (b) => a * b;


// why we need this such strage notation - it is regarding to Currying.
// create a currying function - Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions.
// 函数柯里化：https://www.youtube.com/watch?v=vU3MVB5IxUY&t=4s
// 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
// React中的应用，例如 login 中 get input value.
// https://github.com/YumeLoL/react-ts-tailwind-template/blob/main/src/pages/Login/index.tsx

