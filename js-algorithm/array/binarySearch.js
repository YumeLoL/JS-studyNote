// 704-Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// 二分法查找的条件： 有序的（升序）整型数组，且数组中无重复元素
// 思路：
//      1. 两个指针 left right 指向数字头尾， left = 0, right = arr.length - 1
//      2. 中间数 mid =

var target = 45;
//           0  1  2  3  4  5   6   7   8   9
var nums = [-1, 0, 3, 5, 9, 12, 33, 45, 46, 67];
//  mid                     5
//  mid                                 8
//  mind                            7

//   左闭右闭区间 [left, right)
var search = function (nums, target) {
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let mid,
    left = 0,
    right = nums.length; // 10

  // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    console.log("mid", mid);

    // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
    // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
    if (nums[mid] > target) {
      right = mid; // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1; // 去右面闭区间寻找
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search(nums, target));

// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md
