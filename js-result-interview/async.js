let num = 0;
async function increment() {
  num += await 2; // 因为await， 所以后执行。 因为num=0已经进入并等待执行，所以结果是2
  console.log(num);
}
increment();

num = 2;
async function increment1() {
  num += await 3; // 因为await， 所以后执行。 因为num=2已经进入并等待执行，所以结果是2
  console.log(num);
}
increment1();

num += 1; // 最先执行
console.log(num);

// 3, 2, 5
