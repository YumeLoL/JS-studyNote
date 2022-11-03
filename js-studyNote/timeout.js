console.log("A");

let time1 = setTimeout(() => {
  console.log("B");
}, 1);

let time2 = setTimeout(() => {
  console.log("C");
}, 10);

let time3 = setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");

// a, e, d, b, c
