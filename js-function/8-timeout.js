console.log("A");

let time1 = setTimeout(() => {
  console.log("B");
}, 0.5); // tricky 
// the number here means the minimum amount of time that must pass before the code can run 经过0.5ms后才可以执行这段代码 

// 0ms和0.5ms后都满足条件，然后需要看先后顺序。the order that you put these things into the asynchronous area

let time2 = setTimeout(() => {
  console.log("C");
}, 10);

let time3 = setTimeout(() => {
  console.log("D");
}, 0); // 0ms trick!

console.log("E");

// A E B! D C

// A E run first because we set a timeout here that means there will be some sort of delay.


