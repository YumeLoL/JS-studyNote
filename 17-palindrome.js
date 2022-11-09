// write a function to determine if the supplied string is a palindrome
// Eg: radar, racecar, kayak are all palindromes
// they are the spelled same backwards and forwards

let palindrome = function(word) {
    // separate into two parts - substring() & Math.floor() / Math.ceil()
    // check ===, cannot check array type directly

    const left = word.substring(0, Math.floor(word.length/2)).toLowerCase()
    const right = word.substring(Math.ceil(word.length/2)).toLowerCase()

    console.log(left, right)


    return left === right.split('').reverse().join('')
  
}


console.log(palindrome('kayak'))
console.log(palindrome('racecar'))
console.log(palindrome('window'))
// console.log(palindrome('?ra??r?'))
// console.log(palindrome('app?e'))
