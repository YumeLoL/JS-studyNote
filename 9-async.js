let num = 0;

async function increment() {
  num += await 2; // Promise.resolve(2)
  // await makes this line of code to wait, and the num = 0.
  console.log(num);
}

increment();

num += 1;

console.log(num)  // 1, 2


