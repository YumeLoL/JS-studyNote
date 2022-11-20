// 704-Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// 二分法查找的条件： 有序的（升序）整型数组，且数组中无重复元素
// 思路：
//      1. 获取中间数的index值，mid = Math.floor( 两边指针和 / 2)
//         left = 0,
//         right = nums.length; 两边指针
//      2  while(left < right) 循环查找，当left=right时，由于nums[right]不在查找范围，所以不必包括此情况

var target = 9;
//           0  1  2  3  4  5   6   7   8   9
var nums = [-1, 0, 3, 5, 9, 12, 33, 45, 46, 67];
//  mid
//  mid                                 
//  mid                             

//   左闭右闭区间 [left, right)
var search = function (nums, target) {
  let mid,
    left = 0,
    right = nums.length; // 10

  // 当 left < right 时，
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log("mid", mid);

    if (nums[mid] > target) {
      right = mid - 1; // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1; // 去右面闭区间寻找
    } else {
      return mid; // nums[mid] 等于 target， 所以返回 mid 值
    }
  }

  return -1;
};

console.log("Q704. Binary search:",search(nums, target));




// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md

// 35.搜索插入位置
var arr = [0, 3, 5, 9, 12],
  target = -16; // length 6

var search = function (nums, target) {
  let left = 0,
    right = nums.length;
  let index;

  while (left < right) {
    index = Math.floor((left + right) / 2);

    if (nums[index] < target) {
      left = index + 1;
    } else if (nums[index] > target) {
      right = index;
    } else {
      return index;
    }
  }

  // 目标值在数组所有元素之前 [0,0)
  // 目标值插入数组中的位置 [left, right) ，return right 即可
  // 目标值在数组所有元素之后的情况 [left, right)，因为是右开区间，所以 return right
  return right; // 只有最后这里不一样
};

console.log("Q35. result:", search(arr, target));


// 34.在排序数组中查找元素的第一个和最后一个位置

// 69. x 的平方根
var mySqrt = function(num) {
  let start = 0;
  let end = num; 
  let mid = 0;

  while(start <= end) {
      mid = Math.floor((start + end)/2)  
      if(mid * mid === num) return mid; 
      else if(mid *mid > num) {
          end = mid - 1                
      } else if(mid * mid < num) {
          start = mid + 1;               
      }
  }

  return mid *mid > num ? mid - 1 : mid 
};

console.log('Q69. square root is:',mySqrt(36))


// 367.有效的完全平方数
var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;
  let result = false;
  
  while(left <= right){
      let middle = Math.floor((left + right)/2)
      
      let sqr = middle * middle;
      
      if(sqr === num){
          result = true;
          return result;
      }
      
      if(sqr > num){
          right = middle -1;
      }
      
      if(sqr < num){
          left = middle + 1;
      }
  }
  
  return result;
};
