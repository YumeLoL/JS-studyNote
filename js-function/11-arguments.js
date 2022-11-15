// determine if the function received the number of params it expected
let f = function (a, b) {
  console.log(arguments);
  
  if (arguments.length === f.length) console.log("we have a match");
  else console.log("No match");
};

f(1);
f(1, 2);
f(1, 2, 3);

console.log(f.length); // result is 2, because (a,b) two params
