// write a function to determine if one  String is a case-insensitive anagrams of another String
// 单词里的字母的种类和数目没有改变，只是改变了字母的排列顺序
// abcd - bacd true 
// abcdef - aafeddcb false 
// abc - aec false 

let isAnagram = function(str1, str2) {
    let sorted1 = str1.toLowerCase().split('').sort().join('');
    let sorted2 = str2.toLowerCase().split('').sort().join('');

    return sorted1 === sorted2

}

console.log(isAnagram('hello', 'loleh')) // true
console.log(isAnagram('hello', 'heelo')) // false


// sort() 
// split('') can convert a string to an array
// join('') can convert an array to a string