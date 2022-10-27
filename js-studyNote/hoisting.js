// what will be console.logged here

// Q1.
// console.log(foo);
// foo = 1;

//  Q2.
// console.log(foo);
// var foo = 2;

// Q3.
// foo = 3;
// console.log(foo);
// var foo; // bubble to the top

// Q4.
// var foo;
// function foo () {}
// the function will bubble to the top, it doesn't really matter in what line of your code you are writing function for it. it will be the first line that will be executed.

// we can use const and let, we don't have any problem with them because both of them are not bubbling at all.
