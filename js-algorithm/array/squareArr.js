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

function getSquares(nums) {
    let newArray = new Array(nums.length).fill(0);
    let i = 0, j = k = nums.length - 1

    // i,j向中间移动，所以要保证 i <= j 
    while (i <= j) {
        let left = nums[i] * nums[i] // 左边平方
        let right =  nums[j] * nums[j] // 右边平方
        
        // 如果左边小于右边 把左边放到 nums[i]
        if(left < right){
            newArray[k] = right
            k--
            j--
        }else{
            newArray[k] = left
            k--
            i++
        }
    }

    return newArray
}


console.log('original array:', nums)
console.log('getSquares array:', getSquares(nums))



// function sortedSquares(nums) {
//     return nums.map(i => i * i).sort((a, b) => a - b);
// };

// 双指针法: https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.md