// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// 双指针法
// 1. 因为最左和最右的平方一定是两边最大的，所以首先比较两边大小
// 2. 大的值放到新数组中最后面
// 3. 移动指针

var nums = [-4,-1,0,3,10]

const square = (nums) =>{
    for(let i=0; i<nums.length;i++){
        nums[i] = nums[i] * nums[i]
    }

    

    return nums
}

console.log(square(nums))