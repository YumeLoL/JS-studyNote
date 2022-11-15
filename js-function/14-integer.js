// write a function to determine if a number is an integer or not

let isInt = function (number) {
   
    return (!isNaN(number) && parseInt(number) === number) 
}

// Number.isInteger(number) can do the same things

console.log(3, isInt(3))  // true
console.log(3.5, isInt(3.5))  // false
console.log(1.00000, isInt(1.00000))  // true



// check is a number or not (isNaN can convert a string to a number)
console.log(!isNaN('20')) // true

// check the number is integer, and not a string type number 
console.log(parseInt('2') === '2') // false