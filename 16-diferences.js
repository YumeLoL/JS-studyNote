// write a function to determine the largest difference between any two numbers in an array of numbers. 
// largest amount - smallest amount = differences

let numbers = [5, 7, 99, 34, 2, 77, 56, 4, 2, 34, 102, 77, 5, 99];

let difference = (function (array) {
    // remove duplicates with new Set() => {x,x,x,x}
    // pass set back to an array: Array.from(new Set(array.sort((a,b)=> a-b)))
    // or
    const newNums= [...(new Set(array.sort((a,b)=> a-b)))]
    
    return newNums[newNums.length-1] - newNums[0] 
})(numbers)

console.log(difference)