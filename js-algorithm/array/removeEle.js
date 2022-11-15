// 27 remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_] doesn't matter return in any order

//时间复杂度：O(n)
//空间复杂度：O(1)

var nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;

var removeElement = (nums, val) => {
  // 1. set i and j, i is fast pointer points and j is slow pointer points to the index of new array
  let j = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    // 2. if unequal, pointer i and j keep going to the next index
    // 3. at the same time, let the value of nums[i] covers the value of nums[j]
    if (nums[i] != val) {
      nums[j] = nums[i];

      console.log("j:", nums[j]);

      j++;
    }
  }
  // 4. if equal, i still keeps going but j stay.
  return { nums, j };
};

console.log("removed array length is:", removeElement(nums, val));

// 26.删除排序数组中的重复项
// 283.移动零
// 844.比较含退格的字符串
// 977.有序数组的平方
